import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home.jsx'
import Add from './pages/add/add.jsx'
import Contact from './pages/contact/contact.jsx'
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'

function App() {
  return (
    <div>
      <Home />
      <Add />
      <Contact />
      <Login />
      <Register />
    </div>
  )
}

export default App
