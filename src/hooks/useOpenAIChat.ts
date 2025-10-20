import { useState, useRef, useCallback, useEffect } from 'react';
import { floatTo16BitPCM, base64ToFloat32, AudioPlayer } from '../utils/audioUtils';

export type ChatState =
  | 'idle'
  | 'thinking'
  | 'speaking'
  | 'error';

interface UseOpenAIChatConfig {
  backendUrl?: string;
  voice?: 'alloy' | 'ash' | 'ballad' | 'coral' | 'echo' | 'sage' | 'shimmer' | 'verse' | 'marin' | 'cedar';
  instructions?: string;
  onStateChange?: (state: ChatState) => void;
}

interface UseOpenAIChatReturn {
  state: ChatState;
  error: string | null;
  sendMessage: (audioData: Float32Array) => Promise<void>;
  isReady: boolean;
}

/**
 * Hook para manejar la comunicación con OpenAI Chat Completions API (con audio)
 * Envía audio del usuario y recibe respuestas con audio via HTTP
 */
export const useOpenAIChat = (
  config: UseOpenAIChatConfig
): UseOpenAIChatReturn => {
  const [state, setState] = useState<ChatState>('idle');
  const [error, setError] = useState<string | null>(null);

  const audioPlayerRef = useRef<AudioPlayer | null>(null);
  const stateRef = useRef<ChatState>('idle');

  const backendUrl = config.backendUrl || 'http://localhost:8080';

  // Sync ref with state
  useEffect(() => {
    stateRef.current = state;
    config.onStateChange?.(state);
  }, [state, config]);

  // Initialize audio player
  useEffect(() => {
    audioPlayerRef.current = new AudioPlayer(24000); // OpenAI usa 24kHz para audio

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

  /**
   * Enviar mensaje de audio a OpenAI y recibir respuesta
   */
  const sendMessage = useCallback(async (audioData: Float32Array) => {
    try {
      setState('thinking');
      setError(null);

      console.log('📤 Sending audio to backend...');
      console.log('📊 Audio samples:', audioData.length);

      // Convertir Float32Array a PCM16 base64
      const base64Audio = floatTo16BitPCM(audioData);
      console.log('📦 Base64 audio length:', base64Audio.length, 'chars');

      // Hacer request HTTP al backend
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          audio: base64Audio,
          instructions: config.instructions,
          voice: config.voice || 'shimmer',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Response received from backend');

      // Procesar respuesta
      if (!data.success) {
        throw new Error(data.error || 'Unknown error from backend');
      }

      // Reproducir audio de respuesta si existe
      if (data.audio) {
        console.log('🔊 Audio response found, processing...');

        // El audio viene en el formato que devuelve OpenAI
        // Necesitamos convertirlo a Float32Array para reproducción
        let audioToPlay: Float32Array;

        if (typeof data.audio === 'string') {
          // Si es base64 string, convertir
          audioToPlay = base64ToFloat32(data.audio);
        } else if (data.audio.data) {
          // Si viene en formato { data: "base64...", format: "pcm16" }
          audioToPlay = base64ToFloat32(data.audio.data);
        } else {
          throw new Error('Unknown audio format in response');
        }

        console.log('🎵 Playing audio response, samples:', audioToPlay.length);

        if (audioPlayerRef.current) {
          audioPlayerRef.current.addAudioChunk(audioToPlay);
        }
      } else {
        console.log('📝 No audio in response, only text:', data.text);
        // Si no hay audio, volver a idle
        setState('idle');
      }

      // Mostrar texto transcrito si existe
      if (data.text) {
        console.log('📝 Transcription:', data.text);
      }

    } catch (err) {
      console.error('❌ Error sending message:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      setState('error');

      // Auto-reset del error después de 3 segundos
      setTimeout(() => {
        if (stateRef.current === 'error') {
          setState('idle');
          setError(null);
        }
      }, 3000);
    }
  }, [config, backendUrl]);

  return {
    state,
    error,
    sendMessage,
    isReady: state === 'idle' || state === 'speaking',
  };
};

/**
 * Instrucciones por defecto para el asistente de hotel
 */
export function getDefaultHotelInstructions(): string {
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
