/**
 * Audio utilities for OpenAI Chat Completions API
 * Handles audio format conversions and playback
 */

/**
 * Convert Float32Array audio (from VAD) to base64-encoded WAV (for OpenAI)
 * @param float32Array Audio data in Float32Array format (-1.0 to 1.0)
 * @param sampleRate Sample rate in Hz (default: 16000)
 * @returns Base64-encoded WAV audio string
 */
export function floatTo16BitPCM(float32Array: Float32Array, sampleRate: number = 16000): string {
  // Convert Float32 to Int16 PCM
  const int16Array = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    const clamped = Math.max(-1, Math.min(1, float32Array[i]));
    int16Array[i] = clamped < 0 ? clamped * 0x8000 : clamped * 0x7FFF;
  }

  // Create WAV file with header
  const wavBuffer = createWavBuffer(int16Array, sampleRate);

  // Convert to base64
  let binary = '';
  for (let i = 0; i < wavBuffer.length; i++) {
    binary += String.fromCharCode(wavBuffer[i]);
  }

  return btoa(binary);
}

/**
 * Create a WAV file buffer from PCM16 data
 * @param pcm16Data Int16Array with PCM data
 * @param sampleRate Sample rate in Hz
 * @returns Uint8Array with complete WAV file
 */
function createWavBuffer(pcm16Data: Int16Array, sampleRate: number): Uint8Array {
  const numChannels = 1; // Mono
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);
  const dataSize = pcm16Data.length * 2; // 2 bytes per sample
  const headerSize = 44;
  const fileSize = headerSize + dataSize;

  const buffer = new ArrayBuffer(fileSize);
  const view = new DataView(buffer);

  // WAV Header
  // "RIFF" chunk descriptor
  writeString(view, 0, 'RIFF');
  view.setUint32(4, fileSize - 8, true); // File size - 8
  writeString(view, 8, 'WAVE');

  // "fmt " sub-chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
  view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
  view.setUint16(22, numChannels, true); // NumChannels
  view.setUint32(24, sampleRate, true); // SampleRate
  view.setUint32(28, byteRate, true); // ByteRate
  view.setUint16(32, blockAlign, true); // BlockAlign
  view.setUint16(34, bitsPerSample, true); // BitsPerSample

  // "data" sub-chunk
  writeString(view, 36, 'data');
  view.setUint32(40, dataSize, true); // Subchunk2Size

  // Write PCM data
  const pcmView = new Uint8Array(buffer);
  const pcmBytes = new Uint8Array(pcm16Data.buffer);
  pcmView.set(pcmBytes, 44);

  return new Uint8Array(buffer);
}

/**
 * Helper to write string to DataView
 */
function writeString(view: DataView, offset: number, string: string): void {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

/**
 * Convert base64-encoded WAV (from OpenAI) to Float32Array for playback
 * @param base64 Base64-encoded WAV audio string
 * @returns Float32Array audio data (-1.0 to 1.0)
 */
export function base64ToFloat32(base64: string): Float32Array {
  // Decode base64 to binary string
  const binary = atob(base64);

  // Convert binary string to Uint8Array
  const uint8Array = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    uint8Array[i] = binary.charCodeAt(i);
  }

  // Parse WAV file
  const view = new DataView(uint8Array.buffer);

  // Find the data chunk (skip WAV header)
  let dataOffset = 44; // Standard WAV header is 44 bytes

  // Verify it's a valid WAV file
  const riff = String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3));
  if (riff !== 'RIFF') {
    console.warn('Not a valid WAV file, trying to decode as raw PCM16');
    // Fall back to raw PCM16 decoding
    const int16Array = new Int16Array(uint8Array.buffer);
    const float32Array = new Float32Array(int16Array.length);
    for (let i = 0; i < int16Array.length; i++) {
      float32Array[i] = int16Array[i] / (int16Array[i] < 0 ? 0x8000 : 0x7FFF);
    }
    return float32Array;
  }

  // Extract PCM data from WAV (skip header)
  const pcmData = new Int16Array(uint8Array.buffer, dataOffset);

  // Convert Int16Array to Float32Array
  const float32Array = new Float32Array(pcmData.length);
  for (let i = 0; i < pcmData.length; i++) {
    float32Array[i] = pcmData[i] / (pcmData[i] < 0 ? 0x8000 : 0x7FFF);
  }

  return float32Array;
}

/**
 * Audio player class for handling OpenAI audio responses
 * Manages queuing and playback of audio chunks with proper timing
 */
export class AudioPlayer {
  private audioContext: AudioContext;
  private sampleRate: number;
  private isPlaying: boolean;
  private audioQueue: Float32Array[];
  private nextStartTime: number;
  private onPlaybackStart?: () => void;
  private onPlaybackEnd?: () => void;
  private analyser: AnalyserNode;
  private gainNode: GainNode;
  private audioLevel: number = 0;
  private animationFrameId: number | null = null;
  private endTimeout: number | null = null;
  private readonly END_TIMEOUT_MS = 800; // Grace period before calling onPlaybackEnd (allows for natural pauses, reduced for faster response)

  constructor(sampleRate: number = 24000) {
    this.audioContext = new AudioContext({ sampleRate });
    this.sampleRate = sampleRate;
    this.isPlaying = false;
    this.audioQueue = [];
    this.nextStartTime = 0;

    // Crear nodos para análisis de audio
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 256;
    this.analyser.smoothingTimeConstant = 0.3; // Reduced for faster response (~300ms instead of ~2s)

    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 1.0;

    // Conectar: gainNode → analyser → destination
    this.gainNode.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);

    // Iniciar análisis de audio
    this.startAudioAnalysis();
  }

  /**
   * Start analyzing audio levels
   */
  private startAudioAnalysis() {
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);

    const analyze = () => {
      this.analyser.getByteTimeDomainData(dataArray);

      // Calcular RMS (Root Mean Square) para nivel de audio
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const normalized = (dataArray[i] - 128) / 128;
        sum += normalized * normalized;
      }
      const rms = Math.sqrt(sum / dataArray.length);

      // Normalizar a rango 0-1 y aplicar suavizado
      this.audioLevel = Math.min(rms * 2, 1.0);

      this.animationFrameId = requestAnimationFrame(analyze);
    };

    analyze();
  }

  /**
   * Get current audio level (0.0 - 1.0)
   */
  getAudioLevel(): number {
    return this.audioLevel;
  }

  /**
   * Set callback for when playback starts
   */
  setOnPlaybackStart(callback: () => void) {
    this.onPlaybackStart = callback;
  }

  /**
   * Set callback for when playback ends
   */
  setOnPlaybackEnd(callback: () => void) {
    this.onPlaybackEnd = callback;
  }

  /**
   * Add audio chunk to the playback queue
   * @param audioData Audio data in Float32Array format
   */
  addAudioChunk(audioData: Float32Array) {
    // Cancel any pending end timeout since we're receiving more audio
    if (this.endTimeout !== null) {
      clearTimeout(this.endTimeout);
      this.endTimeout = null;
    }

    this.audioQueue.push(audioData);

    if (!this.isPlaying) {
      this.startPlayback();
    }
  }

  /**
   * Start playing queued audio chunks
   */
  private startPlayback() {
    if (this.audioQueue.length === 0) {
      // Don't end playback immediately - wait for grace period
      // in case more chunks are coming
      if (this.endTimeout === null) {
        this.endTimeout = window.setTimeout(() => {
          this.isPlaying = false;
          this.nextStartTime = 0;  // Reset for next playback session
          this.endTimeout = null;
          this.onPlaybackEnd?.();
        }, this.END_TIMEOUT_MS);
      }
      return;
    }

    // Cancel any pending end timeout since we have more audio to play
    if (this.endTimeout !== null) {
      clearTimeout(this.endTimeout);
      this.endTimeout = null;
    }

    this.isPlaying = true;

    // Notify playback start (only on first chunk)
    if (this.nextStartTime === 0) {
      this.onPlaybackStart?.();
    }

    const audioData = this.audioQueue.shift()!;

    // Create audio buffer
    const audioBuffer = this.audioContext.createBuffer(
      1, // mono
      audioData.length,
      this.sampleRate
    );

    // Fill buffer with audio data
    audioBuffer.getChannelData(0).set(audioData);

    // Create buffer source
    const source = this.audioContext.createBufferSource();
    source.buffer = audioBuffer;
    // Conectar a través del gainNode para análisis
    source.connect(this.gainNode);

    // Schedule playback
    const startTime = Math.max(this.audioContext.currentTime, this.nextStartTime);
    source.start(startTime);

    // Update next start time
    this.nextStartTime = startTime + audioBuffer.duration;

    // Schedule next chunk
    source.onended = () => {
      this.startPlayback();
    };
  }

  /**
   * Clear all queued audio and stop playback
   */
  clear() {
    // Cancel any pending end timeout
    if (this.endTimeout !== null) {
      clearTimeout(this.endTimeout);
      this.endTimeout = null;
    }

    this.audioQueue = [];
    this.nextStartTime = 0;
    this.isPlaying = false;
    this.onPlaybackEnd?.();
  }

  /**
   * Close the audio context and cleanup resources
   */
  async close() {
    this.clear();

    // Detener análisis de audio
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    // Desconectar nodos
    this.gainNode.disconnect();
    this.analyser.disconnect();

    await this.audioContext.close();
  }
}
