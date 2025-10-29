import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DebugPage from './pages/DebugPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/debug" element={<DebugPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
