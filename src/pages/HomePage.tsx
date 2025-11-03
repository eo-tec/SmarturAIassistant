import { useState, useRef, useEffect } from 'react'
import { useMicrophoneStream } from '../hooks/useMicrophoneStream'
import { useOpenAIRealtime, type RealtimeState } from '../hooks/useOpenAIRealtime'
import { VoiceOrb } from '../components/VoiceOrb'
import './HomePage.css'
import '../App.css'

type AssistantState = 'inactive' | 'idle' | 'listening' | 'speaking'

// Umbrales para detección de audio
const LISTENING_THRESHOLD_LOW = 0.01;   // Umbral normal para detectar voz del usuario
const LISTENING_THRESHOLD_HIGH = 0.05;  // Umbral alto para interrumpir al asistente

function HomePage() {
  const [state, setState] = useState<AssistantState>('inactive')
  const [isActive, setIsActive] = useState(false)
  const [realtimeState, setRealtimeState] = useState<RealtimeState>('disconnected')
  const realtimeRef = useRef<any>(null)
  const hasActivatedRef = useRef(false) // Track si el asistente ha sido activado
  const prevStateRef = useRef<AssistantState>('inactive') // Track previous state for logging

  // Hook de OpenAI Realtime API
  const realtime = useOpenAIRealtime({
    voice: 'shimmer',
    onStateChange: (newRealtimeState: RealtimeState) => {
      // Solo guardar el estado, los logs se muestran en el useEffect de determinación
      setRealtimeState(newRealtimeState)
    },
  })

  // Actualizar ref cuando cambie realtime
  useEffect(() => {
    realtimeRef.current = realtime
  }, [realtime])

  // Hook de stream de micrófono
  const microphone = useMicrophoneStream({
    onAudioChunk: (audioChunk) => {
      const currentRealtime = realtimeRef.current

      if (currentRealtime && currentRealtime.isConnected) {
        currentRealtime.sendAudio(audioChunk)
      }
    },
    chunkIntervalMs: 100,
    sampleRate: 24000,
  })

  // Determinar estado visual basándose en audio y realtime state
  useEffect(() => {
    // No cambiar el estado si aún está inactive
    if (!hasActivatedRef.current) {
      return
    }

    let newState: AssistantState = state;

    // Lógica de determinación de estado con umbral dual:
    // 1. Usuario hablando FUERTE (interrumpir al asistente)
    if (microphone.audioLevel > LISTENING_THRESHOLD_HIGH) {
      newState = 'listening';
    }
    // 2. Asistente hablando (confiamos en el estado de OpenAI Realtime)
    else if (realtimeState === 'speaking') {
      newState = 'speaking';
    }
    // 3. Usuario hablando SUAVE (sin asistente)
    else if (microphone.audioLevel > LISTENING_THRESHOLD_LOW) {
      newState = 'listening';
    }
    // 4. Silencio
    else {
      newState = 'idle';
    }

    // Solo actualizar y loguear si el estado realmente cambió
    if (newState !== state) {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('🔄 [STATE CHANGE]', prevStateRef.current, '→', newState);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📊 Context:');
      console.log('  - realtimeState:', realtimeState);
      console.log('  - microphone.audioLevel:', microphone.audioLevel);
      console.log('  - realtime.outputAudioLevel:', realtime.outputAudioLevel);
      console.log('  - hasActivatedRef:', hasActivatedRef.current);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

      prevStateRef.current = newState;
      setState(newState);
    }
  }, [microphone.audioLevel, realtimeState, state])

  // Limpiar al desmontar
  useEffect(() => {
    return () => {
      if (isActive) {
        microphone.stopStreaming()
        realtime.disconnect()
      }
    }
  }, [])

  const activateAssistant = async () => {
    if (state === 'inactive') {
      try {
        hasActivatedRef.current = true
        await realtime.connect()
        await microphone.startStreaming()
        setState('idle')
        setIsActive(true)
      } catch (err) {
        console.error('❌ Error activating assistant:', err)
        alert('Error al iniciar el asistente: ' + (err instanceof Error ? err.message : 'Unknown error'))
        setState('inactive')
        setIsActive(false)
        hasActivatedRef.current = false
      }
    }
  }

  // Audio level reactive to voice for size, but waves remain constant
  const audioLevel = state === 'listening'
    ? microphone.audioLevel
    : state === 'speaking'
    ? realtime.outputAudioLevel
    : 0;

  const onClickHandler = state === 'inactive' ? activateAssistant : undefined;

  return (
    <div className="home-page">
      <div
        className={`orb-container ${state === 'inactive' ? 'inactive' : ''}`}
        onClick={onClickHandler}
        style={{ cursor: state === 'inactive' ? 'pointer' : 'default' }}
      >
        <VoiceOrb
          mode={state}
          audioLevel={audioLevel}
        />
      </div>

      {state === 'inactive' && (
        <button className="start-button" onClick={activateAssistant}>
          Haz click aquí para empezar
        </button>
      )}
    </div>
  )
}

export default HomePage
