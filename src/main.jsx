import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import HomeNavBar from './pages/Home/index.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/academia">
      <HomeNavBar />
    </BrowserRouter>
  </StrictMode>
)