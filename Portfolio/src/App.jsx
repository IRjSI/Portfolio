import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import './App.css'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Outlet } from 'react-router'
import Skills from './Components/Skills'

function App() {

  return (
    <div className='p-4 font-mono'>
      <div className='bg-violet-500 w-64 h-96 opacity-15 blur-3xl absolute'></div>
      <Header />
      <div className='bg-blue-800 w-64 h-96 opacity-15 blur-3xl absolute right-0'></div>
      {/* <Outlet /> */}
      
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  )
}

export default App
