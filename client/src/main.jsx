import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import JobDetails from './JobDetails.jsx'
import ApplicationForm from './ApplicationForm.jsx'
import ApplicationSubmitted from './ApplicationSubmitted.jsx'

const pages = {
  '/': JobDetails,
  '/application-form': ApplicationForm,
  '/application-submitted': ApplicationSubmitted,
}

const path = window.location.pathname.toLowerCase()
const CurrentPage = pages[path] || JobDetails

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrentPage />
  </StrictMode>,
)
