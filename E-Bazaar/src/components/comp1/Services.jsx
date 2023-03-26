import React from 'react'
import './services.css'

const Services = () => {
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
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="px-3">
          <div class="card ">
            <h3 class="card-header text-center">Buyer</h3>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
