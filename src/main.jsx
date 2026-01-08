import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import HomeNavBar from './pages/Home/NavBar.jsx'
import IntroHome from "./pages/Home/IntroHome.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/academia">
      <HomeNavBar />
      <IntroHome />
    </BrowserRouter>
  </StrictMode>
)