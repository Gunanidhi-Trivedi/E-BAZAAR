import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App
