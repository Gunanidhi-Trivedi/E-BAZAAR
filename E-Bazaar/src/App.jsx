import React from 'react'
import Navbar from './components/comp1/Navbar'
import Home from './components/comp1/Home'
import Contact from './components/comp1/Contact'
import { Route , Routes } from 'react-router-dom'

import LoginPage from './components/comp1/Login'
import SignUp from './components/comp1/signUp'

import Farmer from '../src/components/comp2/Farmer'
import Buyer from '../src/components/comp3/Buyer'

import Pitch from '../src/components/farmerComp/Pitch'
import Sell from '../src/components/farmerComp/Sell'

import Buy from '../src/components/buyerComp/Buy'
import MakePitch from '../src/components/buyerComp/MakePitch'

import Govtscheme from '../src/components/comp4/govtscheme'

const App = () => {
  // this method makes the nev bar and footer alwase visible when changin the page
    return (
  <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/farmerportal' element={<Farmer/>} />
        <Route path='/buyerportal' element={<Buyer/>} />
        <Route path='/pitch' element={<Pitch/>} />
        <Route path='/sell' element={<Sell/>} />
        <Route path='/buycrop' element={<Buy/>} />
        <Route path='/preorder' element={<MakePitch/>} />
        <Route path='/govtschemes' element={<Govtscheme/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signUp' element={<SignUp/>} />
      </Routes>
      <Contact/>
    </div>
  )
}

export default App
