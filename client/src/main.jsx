import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FirstPage from './ApplicationForm.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstPage />
  </StrictMode>,
)
