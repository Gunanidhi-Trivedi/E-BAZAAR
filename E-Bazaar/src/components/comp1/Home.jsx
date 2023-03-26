import React from 'react'
import './home.css'
import Services from './Services'


const Home = () => {
  return (
    <div id='home'>
    <div className='bgimg'>
      <div className='texts'>
        <h1 className='text-white'>E-Bazaar</h1>
        <h3>Complete Grocery In Your Pocket</h3>
        <h4>Helping Hands for Farmers & Buyers</h4>
      </div>
    </div>
    <Services/>
    </div>
  )
}

export default Home
