import { useState, useRef, useEffect } from 'react'
import { useMicrophoneStream } from '../hooks/useMicrophoneStream'
import { useOpenAIRealtime, type RealtimeState } from '../hooks/useOpenAIRealtime'
import { VoiceOrb } from '../components/VoiceOrb'
import './HomePage.css'
import '../App.css'

type AssistantState = 'inactive' | 'idle' | 'listening' | 'thinking' | 'speaking'

function HomePage() {
  const [state, setState] = useState<AssistantState>('inactive')
  const [isActive, setIsActive] = useState(false)
  const realtimeRef = useRef<any>(null)
  const hasActivatedRef = useRef(false) // Track si el asistente ha sido activado

  // Hook de OpenAI Realtime API
  const realtime = useOpenAIRealtime({
    voice: 'shimmer',
    onStateChange: (realtimeState: RealtimeState) => {
      console.log('🔄 Realtime state changed:', realtimeState)

      // Solo actualizar el estado visual si el asistente ha sido activado
      if (!hasActivatedRef.current) {
        console.log('⏸️ Assistant not activated yet, ignoring state change')
        return
      }

      // Mapear estados de Realtime a estados del asistente
      switch (realtimeState) {
        case 'disconnected':
        case 'connected':
          setState('idle')
          break
        case 'connecting':
          setState('idle')
          break
        case 'idle':
          setState('idle')
          break
        case 'listening':
          setState('listening')
          break
        case 'thinking':
          setState('thinking')
          break
        case 'speaking':
          setState('speaking')
          break
        case 'error':
          setState('idle')
          break
      }
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
    console.log('🔔 activateAssistant called, current state:', state)

    if (state === 'inactive') {
      console.log('▶️ Activating assistant...')

      try {
        // Marcar que el asistente ha sido activado
        hasActivatedRef.current = true

        // Conectar a OpenAI Realtime API
        console.log('📡 Connecting to OpenAI Realtime...')
        await realtime.connect()
        console.log('✅ Connected to Realtime API')

        // Iniciar stream de micrófono
        await microphone.startStreaming()
        console.log('✅ Microphone stream started')

        setState('idle')
        setIsActive(true)
      } catch (err) {
        console.error('❌ Error activating assistant:', err)
        alert('Error al iniciar el asistente: ' + (err instanceof Error ? err.message : 'Unknown error'))
        setState('inactive')
        setIsActive(false)
        hasActivatedRef.current = false // Reset en caso de error
      }
    } else {
      console.log('⚠️ Cannot activate: state is not inactive (current state:', state, ')')
    }
  }

  // Determinar qué nivel de audio usar según el estado
  const audioLevel = state === 'listening'
    ? microphone.audioLevel
    : state === 'speaking'
    ? realtime.outputAudioLevel
    : 0;

  // Log de estado actual en cada render
  const onClickHandler = state === 'inactive' ? activateAssistant : undefined;
  console.log('🎨 Rendering HomePage - state:', state, 'isActive:', isActive, 'onClick:', onClickHandler ? 'defined' : 'undefined');

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
