import React from 'react'
import Navbar from './components/comp1/Navbar'
import Home from './components/comp1/Home'
import Services from './components/comp1/Services'
import Contact from './components/comp1/Contact'

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
