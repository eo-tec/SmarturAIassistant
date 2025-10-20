import { useState, useRef, useCallback, useEffect } from 'react';

interface MicrophoneStreamConfig {
  onAudioChunk?: (audio: Float32Array) => void;
  chunkIntervalMs?: number; // Intervalo para enviar chunks (default: 100ms)
  sampleRate?: number; // Sample rate del audio (default: 24000 para OpenAI)
}

interface UseMicrophoneStreamReturn {
  isStreaming: boolean;
  audioLevel: number;
  startStreaming: () => Promise<void>;
  stopStreaming: () => void;
  error: string | null;
}

/**
 * Hook para capturar audio del micrófono y enviarlo en chunks continuos
 * Usado con OpenAI Realtime API que tiene server VAD integrado
 */
export const useMicrophoneStream = (
  config: MicrophoneStreamConfig = {}
): UseMicrophoneStreamReturn => {
  const {
    onAudioChunk,
    chunkIntervalMs = 100, // 100ms chunks
    sampleRate = 24000, // OpenAI usa 24kHz
  } = config;

  const [isStreaming, setIsStreaming] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorNodeRef = useRef<ScriptProcessorNode | null>(null);
  const audioBufferRef = useRef<Float32Array>(new Float32Array(0));
  const chunkTimerRef = useRef<number | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopStreaming();
    };
  }, []);

  const startStreaming = useCallback(async () => {
    try {
      setError(null);
      console.log('🎤 Starting microphone stream...');

      // Get microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: sampleRate,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      mediaStreamRef.current = stream;

      // Create audio context
      const audioContext = new AudioContext({ sampleRate });
      audioContextRef.current = audioContext;

      // Create source from microphone
      const source = audioContext.createMediaStreamSource(stream);
      sourceNodeRef.current = source;

      // Create processor node (buffer size 4096 samples)
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      processorNodeRef.current = processor;

      // Process audio chunks
      processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);

        // Calculate audio level for visualization
        const sum = inputData.reduce((acc, val) => acc + Math.abs(val), 0);
        const avg = sum / inputData.length;
        setAudioLevel(Math.min(avg * 10, 1)); // Normalize to 0-1

        // Accumulate audio in buffer
        const newBuffer = new Float32Array(
          audioBufferRef.current.length + inputData.length
        );
        newBuffer.set(audioBufferRef.current);
        newBuffer.set(inputData, audioBufferRef.current.length);
        audioBufferRef.current = newBuffer;
      };

      // Connect nodes
      source.connect(processor);
      processor.connect(audioContext.destination);

      // Send chunks at regular intervals
      const sendChunk = () => {
        if (audioBufferRef.current.length > 0) {
          // Send accumulated audio
          onAudioChunk?.(audioBufferRef.current);

          // Reset buffer
          audioBufferRef.current = new Float32Array(0);
        }
      };

      // Start sending chunks
      chunkTimerRef.current = window.setInterval(sendChunk, chunkIntervalMs);

      setIsStreaming(true);
      console.log('✅ Microphone stream started');
      console.log(`📊 Sample rate: ${sampleRate}Hz, Chunk interval: ${chunkIntervalMs}ms`);
    } catch (err) {
      console.error('❌ Error starting microphone stream:', err);
      setError(
        err instanceof Error ? err.message : 'Failed to access microphone'
      );
      setIsStreaming(false);
    }
  }, [onAudioChunk, chunkIntervalMs, sampleRate]);

  const stopStreaming = useCallback(() => {
    console.log('⏹️ Stopping microphone stream...');

    // Clear chunk timer
    if (chunkTimerRef.current !== null) {
      clearInterval(chunkTimerRef.current);
      chunkTimerRef.current = null;
    }

    // Disconnect and clean up audio nodes
    if (processorNodeRef.current) {
      processorNodeRef.current.disconnect();
      processorNodeRef.current.onaudioprocess = null;
      processorNodeRef.current = null;
    }

    if (sourceNodeRef.current) {
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }

    // Close audio context
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    // Stop media stream tracks
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    // Clear buffer
    audioBufferRef.current = new Float32Array(0);

    setIsStreaming(false);
    setAudioLevel(0);
    console.log('✅ Microphone stream stopped');
  }, []);

  return {
    isStreaming,
    audioLevel,
    startStreaming,
    stopStreaming,
    error,
  };
};
