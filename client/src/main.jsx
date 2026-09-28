import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JobDetails from './JobDetails.jsx'
import ApplicationForm from './ApplicationForm.jsx'

const CurrentPage = window.location.pathname.toLowerCase() === '/applicationform'
  ? ApplicationForm
  : JobDetails
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrentPage />
  </StrictMode>,
)
