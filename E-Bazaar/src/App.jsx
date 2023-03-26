import React, { useState } from 'react'
import Navbar from './components/comp1/Navbar'
import Home from './components/comp1/Home'
import Services from './components/comp1/Services'
import Contact from './components/comp1/Contact'
import { Route , Routes, useLocation } from 'react-router-dom'

import Farmer from '../src/components/comp2/Farmer'
import Buyer from '../src/components/comp3/Buyer'

const App = () => {
  // const loc = useLocation();
  

  // if(loc.pathname == "/farmerportal")
  // {
  //   return(
  //     <Routes>
  //       <Route path='/farmerportal' element={<Farmer/>} />
  //     </Routes>
  //   )
  // }
  // else if(loc.pathname == '/buyerportal')
  // {
  //     return(
  //       <Routes>
  //         <Route path='/buyerportal' element={<Buyer/>} />
  //       </Routes>
  //     )
  // }
  // else
  // {

  // this method makes the nev bar and footer alwase visible when changin the page
    return (
  <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/farmerportal' element={<Farmer/>} />
        <Route path='/buyerportal' element={<Buyer/>} />
      </Routes>
      <Contact/>
    </div>
  )
}

export default App
