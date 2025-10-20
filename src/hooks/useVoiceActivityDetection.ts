import { useState, useRef, useCallback, useEffect } from 'react';
import { MicVAD } from '@ricky0123/vad-web';

export type VADState = 'idle' | 'listening' | 'speaking' | 'silence';

interface VADConfig {
  onSpeechStart?: () => void;   // Callback cuando detecta voz
  onSpeechEnd?: (audio: Float32Array) => void;     // Callback cuando detecta fin de voz con audio
}

interface UseVADReturn {
  vadState: VADState;
  audioLevel: number;
  startListening: () => Promise<void>;
  stopListening: () => void;
  error: string | null;
}

/**
 * Voice Activity Detection hook using @ricky0123/vad-web
 * Uses Silero VAD model (ML-based) for accurate speech detection
 */
export const useVoiceActivityDetection = (config: VADConfig = {}): UseVADReturn => {
  const [vadState, setVadState] = useState<VADState>('idle');
  const [audioLevel, setAudioLevel] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const vadInstanceRef = useRef<MicVAD | null>(null);
  const vadStateRef = useRef<VADState>('idle');

  // Sync ref with state
  useEffect(() => {
    vadStateRef.current = vadState;
  }, [vadState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (vadInstanceRef.current) {
        console.log('🧹 VAD: Cleanup on unmount');
        vadInstanceRef.current.pause();
        vadInstanceRef.current.destroy();
        vadInstanceRef.current = null;
      }
    };
  }, []);

  // Start listening using @ricky0123/vad-web
  const startListening = useCallback(async () => {
    try {
      setError(null);

      // Destroy previous instance if exists
      if (vadInstanceRef.current) {
        console.log('⏹️ VAD: Destroying previous instance');
        vadInstanceRef.current.pause();
        vadInstanceRef.current.destroy();
        vadInstanceRef.current = null;
      }

      console.log('🎯 VAD: Initializing @ricky0123/vad-web...');

      // Create new MicVAD instance
      const myvad = await MicVAD.new({
        onSpeechStart: () => {
          console.log('🎤 VAD: Speech start detected');
          setVadState('speaking');
          vadStateRef.current = 'speaking';
          config.onSpeechStart?.();
        },
        onSpeechEnd: (audio) => {
          console.log('🔇 VAD: Speech end detected', {
            audioLength: audio.length,
            duration: `${(audio.length / 16000).toFixed(2)}s`,
          });
          setVadState('silence');
          vadStateRef.current = 'silence';
          config.onSpeechEnd?.(audio);  // Pasar el audio al callback

          // Calculate average audio level from the segment for visualization
          const avgLevel = audio.reduce((sum, val) => sum + Math.abs(val), 0) / audio.length;
          setAudioLevel(avgLevel * 3); // Amplify for better visualization
        },
        // Use CDN for ONNX Runtime and VAD assets
        onnxWASMBasePath: "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/",
        baseAssetPath: "https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.27/dist/",
      });

      vadInstanceRef.current = myvad;

      console.log('✅ VAD: Instance created successfully');

      // Start VAD
      myvad.start();
      setVadState('listening');
      vadStateRef.current = 'listening';
      console.log('🎧 VAD: Started listening for speech');
    } catch (err) {
      console.error('❌ VAD: Error starting listening:', err);
      setError('microphone_access_denied');
      setVadState('idle');
      vadStateRef.current = 'idle';
    }
  }, [config]);

  // Stop listening
  const stopListening = useCallback(() => {
    console.log('⏹️ VAD: Stopping listening');

    if (vadInstanceRef.current) {
      vadInstanceRef.current.pause();
      vadInstanceRef.current.destroy();
      vadInstanceRef.current = null;
    }

    setVadState('idle');
    vadStateRef.current = 'idle';
    setAudioLevel(0);
  }, []);

  return {
    vadState,
    audioLevel,
    startListening,
    stopListening,
    error,
  };
};
