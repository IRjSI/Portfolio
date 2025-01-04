import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import './App.css'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className='p-4 font-mono'>
      <Header />
      {/* <Outlet /> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      
    </div>
  )
}

export default App
