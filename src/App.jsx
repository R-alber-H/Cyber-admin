import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './routers/routers'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouters />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
