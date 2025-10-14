import { useState } from 'react'
import OrbitalSystem from './OrbitalSystem.tsx'
import './App.css'

type AssistantState = 'idle' | 'listening' | 'thinking' | 'speaking'

function App() {
  const [state, setState] = useState<AssistantState>('idle')

  return (
    <>
      <OrbitalSystem state={state} />

      <div className="controls">
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
    </>
  )
}

export default App
