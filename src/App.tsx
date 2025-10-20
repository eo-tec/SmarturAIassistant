import { useState, useRef, useEffect } from 'react'
import { useVoiceActivityDetection } from './hooks/useVoiceActivityDetection'
import { useOpenAIChat, getDefaultHotelInstructions } from './hooks/useOpenAIChat'
import OrbitalSystem from './OrbitalSystem.tsx'
import './App.css'

type AssistantState = 'idle' | 'listening' | 'thinking' | 'speaking'
type ChatState = 'idle' | 'thinking' | 'speaking' | 'error'

function App() {
  const [state, setState] = useState<AssistantState>('idle')
  const [isActive, setIsActive] = useState(false)
  const chatRef = useRef<any>(null)

  // Hook de OpenAI Chat API
  const chat = useOpenAIChat({
    backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080',
    voice: 'shimmer', // Voces disponibles: alloy, ash, ballad, coral, echo, sage, shimmer, verse, marin, cedar
    instructions: getDefaultHotelInstructions(),
    onStateChange: (chatState: ChatState) => {
      console.log('🔄 Chat state changed:', chatState)

      // Mapear estados de Chat a estados del asistente
      switch (chatState) {
        case 'idle':
          // Solo cambiar a idle si no estamos escuchando
          if (state !== 'listening') {
            setState('idle')
          }
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

  // Actualizar ref cuando cambie chat
  useEffect(() => {
    chatRef.current = chat
  }, [chat])

  // Hook de detección de voz
  const vad = useVoiceActivityDetection({
    onSpeechStart: () => {
      console.log('🎤 Speech started')
      setState('listening')
    },
    onSpeechEnd: async (audio) => {
      console.log('🔇 Speech ended, audio length:', audio.length)

      // Usar ref para obtener el estado actual
      const currentChat = chatRef.current
      console.log('🔍 Chat state:', currentChat?.state, 'isReady:', currentChat?.isReady)

      if (currentChat && currentChat.isReady) {
        console.log('📤 Sending audio to backend...')
        try {
          await currentChat.sendMessage(audio)
        } catch (err) {
          console.error('❌ Error sending audio:', err)
          setState('idle')
        }
      } else {
        console.warn('⚠️ Chat not ready, state:', currentChat?.state)
        setState('idle')
      }
    },
  })

  // Limpiar al desmontar
  useEffect(() => {
    return () => {
      if (isActive) {
        vad.stopListening()
      }
    }
  }, [])

  const toggleAssistant = async () => {
    if (isActive) {
      // Detener asistente
      console.log('⏹️ Stopping assistant...')
      vad.stopListening()
      setState('idle')
      setIsActive(false)
    } else {
      // Iniciar asistente
      console.log('▶️ Starting assistant...')

      try {
        // Solo necesitamos iniciar VAD, no hay conexión que mantener
        await vad.startListening()
        console.log('✅ VAD started')

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

  return (
    <>
      <OrbitalSystem state={state} />

      <div className="controls">
        <button
          className={`control-btn ${isActive ? 'active' : ''}`}
          onClick={toggleAssistant}
          disabled={chat.state === 'error'}
          style={{
            marginBottom: '20px',
            width: '240px',
            fontSize: '16px',
            backgroundColor: chat.state === 'error' ? '#999' : (isActive ? '#4CAF50' : '#f44336')
          }}
        >
          {chat.state === 'error'
            ? '❌ Error de conexión'
            : isActive
            ? '⏹️ Detener Asistente'
            : '▶️ Iniciar Asistente'}
        </button>

        {isActive && (
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#999', fontSize: '14px', marginBottom: '5px' }}>
              Estado Chat: <strong>{chat.state}</strong>
            </p>
            <p style={{ color: '#999', fontSize: '14px', marginBottom: '5px' }}>
              Estado VAD: {vad.vadState === 'speaking' ? '🎤 Hablando' : '👂 Escuchando'}
            </p>
            <p style={{ color: '#999', fontSize: '14px' }}>
              Estado visual: <strong>{state}</strong>
            </p>
          </div>
        )}

        {chat.error && (
          <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#fee', borderRadius: '5px' }}>
            <p style={{ color: '#f44336', fontSize: '14px', marginBottom: '10px', fontWeight: 'bold' }}>
              ❌ Error: {chat.error}
            </p>
            <p style={{ color: '#666', fontSize: '12px' }}>
              💡 Asegúrate de que el servidor backend esté corriendo en http://localhost:8080
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
            ⚠️ Asegúrate de iniciar el servidor backend: cd server && npm install && npm start
          </p>
          <p style={{ color: '#666', fontSize: '11px', textAlign: 'center', lineHeight: '1.5', marginTop: '5px' }}>
            🔑 Configura OPENAI_API_KEY en server/.env
          </p>
        </div>
      </div>
    </>
  )
}

export default App
