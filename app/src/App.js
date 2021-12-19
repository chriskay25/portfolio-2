import React from 'react'
import './App.css'
import Intro from './components/Intro'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <Intro />
      <Profile />
      <Skills />
      <Footer />
    </div>
  )
}

export default App