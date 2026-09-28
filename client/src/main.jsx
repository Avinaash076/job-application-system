import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JobDetails from './JobDetails.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < JobDetails/>
  </StrictMode>,
)
