import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <Nav />
      <Intro />
      <Profile />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App