import { useState, useRef, useCallback, useEffect } from 'react';
import { floatTo16BitPCM, base64ToFloat32, AudioPlayer } from '../utils/audioUtils';

export type RealtimeState =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'idle'
  | 'listening'
  | 'thinking'
  | 'speaking'
  | 'error';

interface UseOpenAIRealtimeConfig {
  voice?: 'alloy' | 'ash' | 'ballad' | 'coral' | 'echo' | 'sage' | 'shimmer' | 'verse' | 'marin' | 'cedar';
  instructions?: string;
  onStateChange?: (state: RealtimeState) => void;
}

interface UseOpenAIRealtimeReturn {
  state: RealtimeState;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  sendAudio: (audioData: Float32Array) => void;
  isConnected: boolean;
  outputAudioLevel: number; // Nivel de audio de salida (0.0 - 1.0)
}

/**
 * Hook para manejar la conexión con OpenAI Realtime API
 * Gestiona WebSocket, audio streaming bidireccional y estado de la conversación
 */
export const useOpenAIRealtime = (
  config: UseOpenAIRealtimeConfig
): UseOpenAIRealtimeReturn => {
  const [state, setState] = useState<RealtimeState>('disconnected');
  const [error, setError] = useState<string | null>(null);
  const [outputAudioLevel, setOutputAudioLevel] = useState(0);

  const wsRef = useRef<WebSocket | null>(null);
  const audioPlayerRef = useRef<AudioPlayer | null>(null);
  const stateRef = useRef<RealtimeState>('disconnected');
  const activeResponseIdRef = useRef<string | null>(null); // Rastrear respuesta activa de OpenAI

  // Sync ref with state
  useEffect(() => {
    stateRef.current = state;
    config.onStateChange?.(state);
  }, [state, config]);

  // Initialize audio player
  useEffect(() => {
    audioPlayerRef.current = new AudioPlayer(24000); // OpenAI usa 24kHz

    audioPlayerRef.current.setOnPlaybackStart(() => {
      console.log('🔊 Audio playback started');
      setState('speaking');
    });

    audioPlayerRef.current.setOnPlaybackEnd(() => {
      console.log('🔇 Audio playback ended');
      if (stateRef.current === 'speaking') {
        setState('idle');
      }
    });

    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.close();
        audioPlayerRef.current = null;
      }
    };
  }, []);

  // Update output audio level continuously
  useEffect(() => {
    const updateAudioLevel = () => {
      if (audioPlayerRef.current) {
        setOutputAudioLevel(audioPlayerRef.current.getAudioLevel());
      }
    };

    const intervalId = setInterval(updateAudioLevel, 50); // Update every 50ms

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, []);

  /**
   * Conectar a OpenAI Realtime API a través del servidor relay WebSocket
   * El servidor relay maneja la autenticación de forma segura
   */
  const connect = useCallback(async () => {
    try {
      setState('connecting');
      setError(null);

      // Cerrar conexión existente si la hay
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }

      // SIEMPRE usar servidor relay para mantener la API key segura
      console.log('🔌 Connecting to OpenAI via relay server...');
      console.log('📡 Using relay server for secure connection');

      const relayUrl = 'ws://localhost:8080';
      console.log('🔗 Relay URL:', relayUrl);

      const ws = new WebSocket(relayUrl);

      ws.addEventListener('open', () => {
        console.log('✅ WebSocket connected to relay');

        // Enviar configuración de sesión (modelo gpt-realtime-mini-2025-10-06)
        const sessionConfig = {
          type: 'session.update',
          session: {
            modalities: ['text', 'audio'],
            instructions: config.instructions || getDefaultHotelInstructions(),
            voice: config.voice || 'shimmer',
            input_audio_format: 'pcm16',
            output_audio_format: 'pcm16',
            input_audio_transcription: {
              model: 'whisper-1',
            },
            turn_detection: {
              type: 'server_vad',
              threshold: 0.5,              // Sensibilidad balanceada
              prefix_padding_ms: 500,      // Capturar 500ms antes de detectar voz
              silence_duration_ms: 2000,   // Permitir pausas de ~2s sin cortar
            },
            temperature: 0.8,
          },
        };

        console.log('📤 Sending session config');
        ws.send(JSON.stringify(sessionConfig));
      });

      // Manejar mensajes del servidor
      ws.addEventListener('message', async (event) => {
        try {
          let data;

          // Manejar diferentes tipos de datos
          if (event.data instanceof Blob) {
            // Si es un Blob, convertir a texto primero
            const text = await event.data.text();
            data = JSON.parse(text);
          } else if (typeof event.data === 'string') {
            // Si ya es string, parsear directamente
            data = JSON.parse(event.data);
          } else {
            console.warn('⚠️ Unexpected message format:', typeof event.data);
            return;
          }

          handleServerEvent(data);
        } catch (err) {
          console.error('❌ Error parsing server message:', err);
        }
      });

      // Manejar errores
      ws.addEventListener('error', (event) => {
        console.error('❌ WebSocket error:', event);
        setError('connection_error');
        setState('error');
      });

      // Manejar cierre de conexión
      ws.addEventListener('close', (event) => {
        console.log('🔌 WebSocket closed:', event.code, event.reason);

        // Códigos de error comunes
        if (event.code === 1002) {
          console.error('❌ Protocol error - check API key format');
          setError('Invalid API key or protocol error');
        } else if (event.code === 1006) {
          console.error('❌ Abnormal closure - connection lost');
          setError('Connection lost unexpectedly');
        } else if (event.code === 1008) {
          console.error('❌ Policy violation - likely authentication issue');
          setError('Authentication failed - check your API key');
        } else if (event.reason) {
          setError(event.reason);
        }

        if (stateRef.current !== 'disconnected') {
          setState('disconnected');
        }
        wsRef.current = null;
      });

      wsRef.current = ws;
    } catch (err) {
      console.error('❌ Error connecting to OpenAI:', err);
      setError('connection_failed');
      setState('error');
    }
  }, [config]);

  /**
   * Desconectar de OpenAI Realtime API
   */
  const disconnect = useCallback(() => {
    console.log('🔌 Disconnecting from OpenAI...');

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    if (audioPlayerRef.current) {
      audioPlayerRef.current.clear();
    }

    setState('disconnected');
  }, []);

  /**
   * Enviar audio a OpenAI (desde VAD)
   * NOTA: NO hacemos commit manual porque usamos server VAD.
   * OpenAI detecta automáticamente cuando dejaste de hablar y procesa el audio.
   */
  const sendAudio = useCallback((audioData: Float32Array) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      console.warn('⚠️ WebSocket not ready, cannot send audio');
      return;
    }

    try {
      // Convertir Float32Array a PCM16 base64
      const base64Audio = floatTo16BitPCM(audioData);

      // Enviar como evento input_audio_buffer.append
      const appendEvent = {
        type: 'input_audio_buffer.append',
        audio: base64Audio,
      };

      wsRef.current.send(JSON.stringify(appendEvent));
      console.log('📤 Sent audio chunk:', audioData.length, 'samples');

      // NO hacer commit manual - el server VAD lo hace automáticamente
      // cuando detecta que el usuario dejó de hablar (speech_stopped)
    } catch (err) {
      console.error('❌ Error sending audio:', err);
    }
  }, []);

  /**
   * Manejar eventos del servidor OpenAI
   */
  const handleServerEvent = useCallback((event: any) => {
    console.log('📥 Server event:', event.type);

    switch (event.type) {
      case 'relay.connected':
        console.log('✅ Connected to relay server');
        // No cambiar estado aquí, esperar a session.created
        break;

      case 'session.created':
        console.log('✅ Session created:', event.session);
        setError(null); // Limpiar cualquier error previo
        setState('idle');
        break;

      case 'session.updated':
        console.log('✅ Session updated:', event.session);
        setState('idle');
        break;

      case 'input_audio_buffer.speech_started':
        console.log('🎤 User speech started');

        // Si el asistente está hablando, interrumpirlo (barge-in)
        if (stateRef.current === 'speaking' || activeResponseIdRef.current) {
          console.log('⚠️ Interrupting assistant response...');

          // 1. Cancelar la respuesta activa en OpenAI (solo si hay una activa)
          if (activeResponseIdRef.current && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify({
              type: 'response.cancel'
            }));
            console.log('📤 Sent response.cancel to OpenAI (response ID:', activeResponseIdRef.current, ')');
          }

          // 2. Siempre limpiar el buffer de audio local (puede estar reproduciendo aunque OpenAI terminó)
          if (audioPlayerRef.current) {
            audioPlayerRef.current.clear();
            console.log('🧹 Cleared audio playback buffer');
          }
        }

        setState('listening');
        break;

      case 'input_audio_buffer.speech_stopped':
        console.log('🔇 User speech stopped');
        setState('thinking');
        break;

      case 'input_audio_buffer.committed':
        console.log('✅ Audio buffer committed');
        break;

      case 'conversation.item.created':
        console.log('💬 Conversation item created:', event.item);
        break;

      case 'response.created':
        console.log('🤖 Response created:', event.response);
        // Rastrear ID de respuesta activa para poder cancelarla si es necesario
        activeResponseIdRef.current = event.response?.id || null;
        setState('thinking');
        break;

      case 'response.output_item.added':
        console.log('📝 Output item added:', event.item);
        break;

      case 'response.audio.delta':
        // Recibir chunk de audio de respuesta
        console.log('🔊 Audio delta received:', event.delta?.length || 0, 'chars');

        if (event.delta && audioPlayerRef.current) {
          try {
            const audioData = base64ToFloat32(event.delta);
            audioPlayerRef.current.addAudioChunk(audioData);
          } catch (err) {
            console.error('❌ Error processing audio delta:', err);
          }
        }
        break;

      case 'response.audio.done':
        console.log('✅ Audio response complete');
        // El AudioPlayer manejará la transición a idle cuando termine de reproducir
        break;

      case 'response.done':
        console.log('✅ Response complete:', event.response);
        // Limpiar ID de respuesta activa
        activeResponseIdRef.current = null;

        // Si estábamos en thinking (respuesta sin audio), volver a idle inmediatamente
        if (stateRef.current === 'thinking') {
          setState('idle');
        }
        // Si estábamos en speaking, NO hacer nada aquí.
        // El AudioPlayer manejará la transición a idle cuando termine de reproducir
        // a través del callback onPlaybackEnd (líneas 60-65)
        break;

      case 'response.cancelled':
        console.log('🚫 Response cancelled (interrupted by user)');
        // Limpiar ID de respuesta activa
        activeResponseIdRef.current = null;
        // La respuesta fue cancelada, volver a idle
        setState('idle');
        break;

      case 'response.text.delta':
        console.log('📝 Text delta:', event.delta);
        break;

      case 'response.text.done':
        console.log('✅ Text complete:', event.text);
        break;

      case 'error':
        console.error('❌ Server error:', event.error);

        // Ignorar error de cancelación cuando no hay respuesta activa (es esperado)
        if (event.error?.code === 'response_cancel_not_active') {
          console.log('ℹ️ Attempted to cancel but no active response (audio was playing locally only)');
          break;
        }

        const errorMessage = event.error?.message || JSON.stringify(event.error) || 'server_error';
        setError(errorMessage);
        setState('error');

        // Si es un error temporal del servidor, sugerir reintentar
        if (errorMessage.includes('server had an error') || errorMessage.includes('500')) {
          console.log('💡 Sugerencia: Este es un error temporal de OpenAI. Intenta de nuevo en unos segundos.');
        }
        break;

      default:
        console.log('📥 Unhandled event type:', event.type);
    }
  }, []);

  return {
    state,
    error,
    connect,
    disconnect,
    sendAudio,
    isConnected: state === 'connected' || state === 'idle' || state === 'listening' || state === 'thinking' || state === 'speaking',
    outputAudioLevel,
  };
};

/**
 * Instrucciones por defecto para el asistente de hotel
 */
function getDefaultHotelInstructions(): string {
  return `Eres el asistente virtual del Hotel Bilbao Premium, un hotel de 5 estrellas ubicado en el centro de Bilbao, País Vasco. Tu nombre es "Bilbao Assistant".

IMPORTANTE - ESTA ES UNA DEMO:
Esta es una demostración del producto. Cuando los huéspedes soliciten servicios o acciones, SIMULA que las realizas confirmando que se ha hecho. No menciones que es una simulación.

UBICACIÓN Y CONTEXTO:
- Hotel en Bilbao, cerca del Museo Guggenheim
- Conoces perfectamente Bilbao y el País Vasco
- Solo respondes sobre el hotel o sobre Bilbao/País Vasco
- Si preguntan sobre otros temas, redirige educadamente al tema del hotel o la ciudad

SERVICIOS DEL HOTEL (inventa detalles realistas si es necesario):
- Restaurante "Bahía Vizcaya" (cocina vasca de autor)
- Spa y wellness center con piscina climatizada
- Gimnasio 24 horas
- Pistas de tenis y pádel
- Bar terraza con vistas al Guggenheim
- Room service 24h
- Servicio de conserjería

HORARIOS TÍPICOS (ajusta si necesario):
- Desayuno: 7:00 - 11:00
- Restaurante comida: 13:00 - 16:00
- Restaurante cena: 20:00 - 23:30
- Spa: 9:00 - 21:00
- Pistas deportivas: 8:00 - 22:00

CUANDO TE PIDAN SERVICIOS:
Si piden toallas, limpieza, room service, o cualquier servicio:
- Confirma que lo has gestionado inmediatamente
- Di algo como "Perfecto, ya he notificado a nuestro equipo. Las toallas llegarán a su habitación en 10-15 minutos"
- NO digas que llamarás o que lo harás, di que YA ESTÁ HECHO
- NUNCA digas "déjame comprobar", "voy a verificar", "un momento por favor"
- Responde DIRECTAMENTE como si ya tuvieras toda la información

CUANDO TE PIDAN LLAMAR A RECEPCIÓN O CONTACTAR:
- Confirma que has contactado y resuelto el tema
- Ejemplo: "Ya he contactado con recepción y confirman que..."
- NO digas "voy a llamar" o "déjame contactar"

PARA RESERVAS:
IMPORTANTE: Solo puedes hacer reservas de servicios DEL HOTEL (restaurante Bahía Vizcaya, spa, pistas de tenis/pádel).

Para servicios del hotel:
1. Si NO te dan día/hora: Pregunta "¿Para qué día y hora le gustaría la reserva?"
2. Si te dan día/hora: Confirma inmediatamente con un número de reserva inventado
   Ejemplo: "Perfecto, he reservado la pista de tenis para mañana a las 10:00. Su número de reserva es BHO-2547"

Para lugares fuera del hotel:
- Si piden reservar en restaurantes externos u otros lugares fuera del hotel, di educadamente que no puedes hacer reservas externas
- Ejemplo: "Lo siento, solo puedo gestionar reservas de los servicios del hotel. Sin embargo, le recomiendo el restaurante Txikito, es excelente"
- Puedes recomendar lugares pero NO reservarlos

RECOMENDACIONES DE BILBAO:
Si piden recomendaciones, inventa lugares realistas y atractivos:
- Restaurantes de pintxos, museos, lugares turísticos
- Sé específico con nombres y ubicaciones (pueden ser inventados pero realistas)
- Ejemplo: "Le recomiendo el restaurante Txikito en la calle Licenciado Poza, tienen unos pintxos increíbles"

TONO Y ESTILO:
- Profesional pero cercano y cálido
- Respuestas concisas (2-4 frases máximo)
- Siempre en español
- Actúa con la eficiencia de un conserje de lujo
- Nunca digas "voy a", "llamaré", "contactaré" → siempre "ya he", "he confirmado", "está gestionado"
- Responde con CONFIANZA INMEDIATA, como si tuvieras acceso instantáneo a toda la información

NUNCA DIGAS:
- "Déjame comprobar..."
- "Voy a verificar..."
- "Un momento, por favor..."
- "Permíteme consultar..."
- "Deja que revise..."

EN SU LUGAR DI:
- "Claro, [información directa]"
- "Perfecto, ya está gestionado"
- "He confirmado que..."
- "[Respuesta directa sin preámbulos]"

NUNCA:
- No menciones que es una demo o simulación
- No des explicaciones técnicas
- No hables de temas fuera del hotel o Bilbao
- No seas demasiado extenso en tus respuestas
- No indiques que estás comprobando o verificando nada`;
}
