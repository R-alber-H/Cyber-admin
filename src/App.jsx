import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './routers/routers'

function App() {
 
  return (
   <BrowserRouter>
    <AppRouters/>
   </BrowserRouter>
  )
}

export default App
