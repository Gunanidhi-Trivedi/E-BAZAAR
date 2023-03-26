import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Route , Routes } from 'react-router-dom'
import './services.css'

const Services = () => {

  const navigate = useNavigate()
  
  function farmerhelp() {
    navigate("/farmerportal")
  }

  function buyerhelp() {
    navigate("/buyerportal")
  }

  return (
    <div id='services'>
      <div>
        <h2 class="text-center pt-4">SERVICES</h2>
      </div>
      <div className='parent '>
        <div class="px-3">
          <div class="card">
            <h3 class="card-header text-center ">Farmer</h3>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button class="btn btn-primary" onClick={farmerhelp}>Sell Your Crop</button>
            </div>
          </div>
        </div>
        <div class="px-3">
          <div class="card ">
            <h3 class="card-header text-center">Buyer</h3>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button class="btn btn-primary" onClick={buyerhelp}>Purchase The Crop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
