import React from 'react'
import './farmer.css'

import { Link } from 'react-router-dom'

const Farmer = () => {
  return (
    <div className="farmer">
      <div>
        <h1>Farmer Portal</h1>
      </div>
      <div>
        <div className='parent'>
          <div class="px-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">SELL</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">SELL</a>
              </div>
            </div>
          </div>
          <div class="px-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">PRE-ORDER</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">pre-order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button class='btn btn-primary'><Link to="/#home" >HOMEPAGE</Link></button> */}
    </div>
  )
}

export default Farmer