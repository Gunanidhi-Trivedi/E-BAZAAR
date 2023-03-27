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
    <div id='services' className='service'>
      <div>
        <h1 class="text-center pt-5">SERVICES</h1>
      </div>
      <div className='parent'>
        <div class="px-3 inner">
          <div class="card">
            <h3 class="card-header text-center ">Farmer</h3>
            <div class="card-body">
              <h5 class="card-title">Sell Your Crops as Farmer</h5>
              <ul>
                <li>Sell any type of crop that you grow as per your price</li>
                <li>Fulfill the crop demand as requested by Buyers</li>
              </ul>
              <button class="btn btn-primary" onClick={farmerhelp}>Sell Your Crop</button>
            </div>
          </div>
        </div>
        <div class="px-3 inner">
          <div class="card ">
            <h3 class="card-header text-center">Buyer</h3>
            <div class="card-body">
              <h5 class="card-title">Purchase The Crops as Buyer</h5>
              <ul>
                <li>Buy the fresh crops pitched by Farmers</li>
                <li>Make the pre-order for the crop you want in future</li>
              </ul>
              <button class="btn btn-primary" onClick={buyerhelp}>Purchase The Crop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
