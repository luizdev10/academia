import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,

<React.StrictMode>
    <BrowserRouter basename="/academia">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)