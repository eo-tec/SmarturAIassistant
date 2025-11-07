import { useState, useRef, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
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
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null) // Timeout para inactividad
  const lastActivityTimeRef = useRef<number>(Date.now()) // Timestamp de última actividad (habla)

  // Leer parámetro returnTo de la URL
  const [searchParams] = useSearchParams()
  const returnTo = searchParams.get('returnTo')

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

    // Solo actualizar si el estado realmente cambió
    if (newState !== state) {
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
        lastActivityTimeRef.current = Date.now() // Resetear timestamp al activar
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

  const deactivateAssistant = useCallback(() => {
    if (isActive) {
      microphone.stopStreaming()
      realtime.disconnect()
      setState('inactive')
      setIsActive(false)
      hasActivatedRef.current = false
    }
  }, [isActive, microphone, realtime])

  // Timeout de inactividad - desconectar después de 30 segundos sin actividad
  useEffect(() => {
    // Solo activar el timeout si el asistente está activo
    if (!isActive) {
      return
    }

    // Limpiar timeout anterior si existe
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current)
    }

    // Si el asistente está hablando o el usuario está hablando, reiniciar el timeout
    if (state === 'speaking' || state === 'listening') {
      inactivityTimeoutRef.current = setTimeout(() => {
        console.log('⏱️ Timeout de inactividad alcanzado (30s), desconectando asistente...')
        deactivateAssistant()
      }, 30000) // 30 segundos
    }
    // Si está en idle, también mantener el timeout pero con mensaje diferente
    else if (state === 'idle') {
      inactivityTimeoutRef.current = setTimeout(() => {
        console.log('⏱️ Sin respuesta del asistente en 30 segundos, desconectando...')
        deactivateAssistant()
      }, 30000) // 30 segundos
    }

    // Limpiar timeout cuando el componente se desmonte o cambie el estado
    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current)
      }
    }
  }, [state, isActive, deactivateAssistant])

  // Actualizar timestamp solo cuando el asistente habla
  useEffect(() => {
    if (state === 'speaking') {
      lastActivityTimeRef.current = Date.now()
    }
  }, [state])

  // Log cada 5 segundos mostrando tiempo sin hablar (solo cuando está idle y activo)
  useEffect(() => {
    if (!isActive || state !== 'idle') {
      return
    }

    const intervalId = setInterval(() => {
      const secondsSinceActivity = Math.floor((Date.now() - lastActivityTimeRef.current) / 1000)
      console.log(`⏱️ Llevas ${secondsSinceActivity} segundos sin hablar`)
    }, 5000) // Cada 5 segundos

    return () => {
      clearInterval(intervalId)
    }
  }, [state, isActive])

  // Audio level reactive to voice for size, but waves remain constant
  const audioLevel = state === 'listening'
    ? microphone.audioLevel
    : state === 'speaking'
    ? realtime.outputAudioLevel
    : 0;

  const onClickHandler = state === 'inactive' ? activateAssistant : deactivateAssistant;

  // Handler para volver a la página anterior
  const handleBackClick = () => {
    if (returnTo) {
      // Asegurarse de que la URL tenga protocolo
      let url = returnTo
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url
      }
      window.location.href = url
    }
  }

  return (
    <div className="home-page">
      {returnTo && (
        <button className="back-button" onClick={handleBackClick} aria-label="Volver">
          <span className="back-arrow">←</span>
          <span>Volver</span>
        </button>
      )}
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

      <button
        className={`start-button ${state !== 'inactive' ? 'stop-mode' : ''}`}
        onClick={onClickHandler}
      >
        {state === 'inactive' ? 'Haz click aquí para empezar' : 'STOP'}
      </button>
    </div>
  )
}

export default HomePage
