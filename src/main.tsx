import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CurriculumPage from './pages/curriculum.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <CurriculumPage />
  </StrictMode>,
)
