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

      const relayUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:8080';
      console.log('🔗 Relay URL:', relayUrl);

      const ws = new WebSocket(relayUrl);

      ws.addEventListener('open', () => {
        console.log('✅ WebSocket connected to relay');

        // Enviar configuración de sesión (modelo gpt-realtime-mini-2025-10-06)
        // Nota: Las instrucciones detalladas se envían como conversation.item después
        const sessionConfig = {
          type: 'session.update',
          session: {
            modalities: ['text', 'audio'],
            instructions: 'Eres la recepcionista del Hotel Jokin. Responde en español, breve y profesionalmente.',
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

        console.log('📤 Sending session config (brief instructions - full context sent as conversation item)');
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

        // Enviar instrucciones como conversation item (mejor práctica)
        // Esto asegura que el contexto esté siempre presente en la conversación
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
          const contextMessage = {
            type: 'conversation.item.create',
            item: {
              type: 'message',
              role: 'system',
              content: [
                {
                  type: 'input_text',
                  text: config.instructions || getDefaultHotelInstructions()
                }
              ]
            }
          };

          console.log('📤 Sending context as conversation item');
          wsRef.current.send(JSON.stringify(contextMessage));
        }

        setState('idle');
        break;

      case 'session.updated':
        console.log('✅ Session updated');
        console.log('📋 Session config received:', JSON.stringify(event.session, null, 2));
        console.log('📝 Instructions confirmed:', event.session?.instructions?.substring(0, 100) + '...');
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
  return `Eres la recepcionista del Hotel Jokin, un hotel de lujo en Santiago de Compostela, Galicia, España.

El usuario siempre es un huésped del hotel.
Tu función es atenderle con educación, profesionalidad y discreción, ofreciendo información y recomendaciones solo sobre el hotel, sus servicios o el entorno local (restaurantes, transporte, actividades, cultura, etc.).

CRÍTICO - NUNCA DEJAR COLGANDO AL HUÉSPED:
❌ NUNCA JAMÁS digas:
- "Déjame revisar..."
- "Voy a comprobar..."
- "Un momento, por favor..."
- "Estoy consultando..."
- "Permíteme verificar..."
- "Voy a mirar..."
- "Dame un segundo..."

✅ SIEMPRE responde de forma INMEDIATA y CONCLUYENTE:
- Para reservas: "Perfecto, he realizado su reserva. Confirmado."
- Para información: Da la información directamente sin preámbulos
- Para recomendaciones: Pregunta preferencias PRIMERO, luego recomienda directamente

Antes de ofrecer cualquier recomendación, pregunta siempre los gustos o preferencias del huésped.

Tus respuestas deben ser breves, claras y educadas, con un máximo de 200 caracteres.
Evita comentarios personales o información ajena al contexto del hotel.

Mantén siempre un tono cálido, servicial y propio de una recepcionista de hotel de lujo.

Solo tienes permiso a recomendar estos restaurantes:
- Estilo moderno: Indómito.
- Estilo tradicional: A noiesa Casa de Comidas.`;
}
