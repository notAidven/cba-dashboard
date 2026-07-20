import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlossaryProvider } from './components/GlossaryText.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlossaryProvider>
      <App />
    </GlossaryProvider>
  </StrictMode>,
)
