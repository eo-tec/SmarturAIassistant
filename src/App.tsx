import { useState, useRef, useEffect } from 'react'
import { useMicrophoneStream } from './hooks/useMicrophoneStream'
import { useOpenAIRealtime, type RealtimeState } from './hooks/useOpenAIRealtime'
import OrbitalSystem from './OrbitalSystem.tsx'
import './App.css'

type AssistantState = 'idle' | 'listening' | 'thinking' | 'speaking'

function App() {
  const [state, setState] = useState<AssistantState>('idle')
  const [isActive, setIsActive] = useState(false)
  const realtimeRef = useRef<any>(null)

  // Hook de OpenAI Realtime API
  const realtime = useOpenAIRealtime({
    voice: 'shimmer', // Voces disponibles: alloy, ash, ballad, coral, echo, sage, shimmer, verse, marin, cedar
    onStateChange: (realtimeState: RealtimeState) => {
      console.log('🔄 Realtime state changed:', realtimeState)

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

  // Hook de stream de micrófono (sin VAD local, usa server VAD de OpenAI)
  const microphone = useMicrophoneStream({
    onAudioChunk: (audioChunk) => {
      // Enviar cada chunk de audio a OpenAI
      // El servidor VAD detectará automáticamente cuando hablas
      const currentRealtime = realtimeRef.current

      if (currentRealtime && currentRealtime.isConnected) {
        currentRealtime.sendAudio(audioChunk)
      }
    },
    chunkIntervalMs: 100, // Enviar chunks cada 100ms
    sampleRate: 24000, // OpenAI usa 24kHz
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

  const toggleAssistant = async () => {
    if (isActive) {
      // Detener asistente
      console.log('⏹️ Stopping assistant...')
      microphone.stopStreaming()
      realtime.disconnect()
      setState('idle')
      setIsActive(false)
    } else {
      // Iniciar asistente
      console.log('▶️ Starting assistant...')

      try {
        // 1. Conectar a OpenAI Realtime API via relay
        console.log('📡 Connecting to OpenAI Realtime...')
        await realtime.connect()
        console.log('✅ Connected to Realtime API')

        // 2. Iniciar stream de micrófono
        // El server VAD de OpenAI detectará automáticamente la voz
        await microphone.startStreaming()
        console.log('✅ Microphone stream started')

        setState('idle')
        setIsActive(true)
      } catch (err) {
        console.error('❌ Error starting assistant:', err)
        alert('Error al iniciar el asistente: ' + (err instanceof Error ? err.message : 'Unknown error'))
        setState('idle')
        setIsActive(false)
      }
    }
  }

  // Determinar qué nivel de audio usar según el estado
  const audioLevel = state === 'listening'
    ? microphone.audioLevel // Nivel del micrófono cuando escucha
    : state === 'speaking'
    ? realtime.outputAudioLevel // Nivel del audio de salida cuando habla
    : 0; // Sin audio para idle/thinking

  return (
    <>
      <OrbitalSystem state={state} audioLevel={audioLevel} />

      <div className="controls">
        <button
          className={`control-btn ${isActive ? 'active' : ''}`}
          onClick={toggleAssistant}
          disabled={realtime.state === 'error'}
          style={{
            marginBottom: '20px',
            width: '240px',
            fontSize: '16px',
            backgroundColor: realtime.state === 'error' ? '#999' : (isActive ? '#4CAF50' : '#f44336')
          }}
        >
          {realtime.state === 'error'
            ? '❌ Error de conexión'
            : isActive
            ? '⏹️ Detener Asistente'
            : '▶️ Iniciar Asistente'}
        </button>

        {isActive && (
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#999', fontSize: '14px', marginBottom: '5px' }}>
              Estado Realtime: <strong>{realtime.state}</strong>
            </p>
            <p style={{ color: '#999', fontSize: '14px', marginBottom: '5px' }}>
              Micrófono: {microphone.isStreaming ? '🎤 Activo' : '⏸️ Inactivo'}
              {microphone.isStreaming && microphone.audioLevel > 0.01 && (
                <span style={{ marginLeft: '10px' }}>
                  🔊 {(microphone.audioLevel * 100).toFixed(0)}%
                </span>
              )}
            </p>
            <p style={{ color: '#999', fontSize: '14px' }}>
              Estado visual: <strong>{state}</strong>
            </p>
          </div>
        )}

        {realtime.error && (
          <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#fee', borderRadius: '5px' }}>
            <p style={{ color: '#f44336', fontSize: '14px', marginBottom: '10px', fontWeight: 'bold' }}>
              ❌ Error: {realtime.error}
            </p>
            <p style={{ color: '#666', fontSize: '12px' }}>
              💡 Asegúrate de que el servidor relay esté corriendo en http://localhost:8080
            </p>
          </div>
        )}

        <div style={{ borderTop: '1px solid #ccc', paddingTop: '20px', marginTop: '10px' }}>
          <p style={{ color: '#999', fontSize: '12px', marginBottom: '10px' }}>
            Controles manuales (para pruebas):
          </p>
          <button
            className={`control-btn ${state === 'idle' ? 'active' : ''}`}
            onClick={() => setState('idle')}
          >
            Idle
          </button>
          <button
            className={`control-btn ${state === 'listening' ? 'active' : ''}`}
            onClick={() => setState('listening')}
          >
            Listening
          </button>
          <button
            className={`control-btn ${state === 'thinking' ? 'active' : ''}`}
            onClick={() => setState('thinking')}
          >
            Thinking
          </button>
          <button
            className={`control-btn ${state === 'speaking' ? 'active' : ''}`}
            onClick={() => setState('speaking')}
          >
            Speaking
          </button>
        </div>

        <div style={{ borderTop: '1px solid #ccc', paddingTop: '20px', marginTop: '20px' }}>
          <p style={{ color: '#666', fontSize: '11px', textAlign: 'center', lineHeight: '1.5' }}>
            ⚠️ Servidor relay WebSocket: cd server && npm install && npm start
          </p>
          <p style={{ color: '#666', fontSize: '11px', textAlign: 'center', lineHeight: '1.5', marginTop: '5px' }}>
            🔑 Configura OPENAI_API_KEY en server/.env
          </p>
          <p style={{ color: '#666', fontSize: '11px', textAlign: 'center', lineHeight: '1.5', marginTop: '5px' }}>
            🤖 Modelo: gpt-realtime-mini-2025-10-06 (con Server VAD)
          </p>
        </div>
      </div>
    </>
  )
}

export default App
