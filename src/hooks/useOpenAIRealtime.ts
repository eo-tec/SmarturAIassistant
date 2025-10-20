import { useState, useRef, useCallback, useEffect } from 'react';
import { floatTo16BitPCM, base64ToFloat32, AudioPlayer } from '../utils/audioUtils';

export type RealtimeState =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'listening'
  | 'thinking'
  | 'speaking'
  | 'error';

interface UseOpenAIRealtimeConfig {
  apiKey: string;
  model?: string;
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

  const wsRef = useRef<WebSocket | null>(null);
  const audioPlayerRef = useRef<AudioPlayer | null>(null);
  const stateRef = useRef<RealtimeState>('disconnected');

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
        setState('listening');
      }
    });

    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.close();
        audioPlayerRef.current = null;
      }
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
   * Conectar a OpenAI Realtime API usando WebSocket directo con autenticación
   * IMPORTANTE: En producción, usar un servidor relay para no exponer la API key
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

      // Determinar si usar servidor relay o conexión directa
      const useRelayServer = true; // Cambiar a false para intentar conexión directa

      let ws: WebSocket;

      if (useRelayServer) {
        // OPCIÓN 1: Usar servidor relay (RECOMENDADO)
        console.log('🔌 Connecting to OpenAI via relay server...');
        console.log('📡 Using relay server for secure connection');

        const relayUrl = 'ws://localhost:8080';
        console.log('🔗 Relay URL:', relayUrl);

        ws = new WebSocket(relayUrl);
      } else {
        // OPCIÓN 2: Conexión directa (puede fallar por restricciones de CORS)
        const model = config.model || 'gpt-4o-realtime-preview-2024-12-17';

        console.log('🔌 Connecting directly to OpenAI Realtime API...');
        console.log('⚠️ WARNING: Direct connection from browser may fail');
        console.log('📝 Using model:', model);

        // Validar formato de API key
        if (!config.apiKey.startsWith('sk-')) {
          console.error('❌ Invalid API key format. Should start with sk-');
          throw new Error('Invalid API key format');
        }

        const url = `wss://api.openai.com/v1/realtime?model=${model}`;
        console.log('🔗 Connection URL:', url);

        const protocols = [
          `openai-insecure-api-key.${config.apiKey}`,
          'openai-beta.realtime-v1'
        ];

        ws = new WebSocket(url, protocols);
      }

      ws.addEventListener('open', () => {
        console.log('✅ WebSocket connected');

        // Enviar configuración de sesión (formato GA)
        const sessionConfig = {
          type: 'session.update',
          session: {
            type: 'realtime',  // REQUERIDO en GA
            model: 'gpt-realtime-mini-2025-10-06',
            modalities: ['text', 'audio'],
            instructions: config.instructions || getDefaultHotelInstructions(),
            audio: {
              input: { format: 'pcm16' },
              output: {
                format: 'pcm16',
                voice: config.voice || 'shimmer'
              }
            },
            input_audio_transcription: {
              model: 'whisper-1',
            },
            turn_detection: {
              type: 'server_vad',
              threshold: 0.5,
              prefix_padding_ms: 300,
              silence_duration_ms: 500,
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

      // Commit el buffer para que OpenAI lo procese
      const commitEvent = {
        type: 'input_audio_buffer.commit'
      };

      wsRef.current.send(JSON.stringify(commitEvent));
      console.log('📤 Committed audio buffer for processing');
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
        setState('listening');
        break;

      case 'session.updated':
        console.log('✅ Session updated:', event.session);
        setState('listening');
        break;

      case 'input_audio_buffer.speech_started':
        console.log('🎤 User speech started');
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
        break;

      case 'response.done':
        console.log('✅ Response complete:', event.response);
        break;

      case 'response.text.delta':
        console.log('📝 Text delta:', event.delta);
        break;

      case 'response.text.done':
        console.log('✅ Text complete:', event.text);
        break;

      case 'error':
        console.error('❌ Server error:', event.error);
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
    isConnected: state === 'connected' || state === 'listening' || state === 'thinking' || state === 'speaking',
  };
};

/**
 * Instrucciones por defecto para el asistente de hotel
 */
function getDefaultHotelInstructions(): string {
  return `Eres un asistente virtual de hotel profesional, amable y servicial. Tu nombre es "Hotel Assistant".

Tu función es ayudar a los huéspedes con:
- Información sobre servicios del hotel (restaurante, spa, gimnasio, piscina)
- Horarios de comidas y servicios
- Reservas de mesas en el restaurante
- Solicitudes de servicio a la habitación
- Información turística local
- Check-in y check-out
- Servicios de conserjería

Siempre responde en español de forma clara, concisa y amigable. Si no sabes algo, ofrece alternativas o sugiere contactar con recepción.

Mantén un tono profesional pero cercano, como si fueras un conserje experimentado del hotel.`;
}
