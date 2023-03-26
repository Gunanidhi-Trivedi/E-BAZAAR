import React from 'react'
import './buyer.css'

import { Link } from 'react-router-dom'

const Buyer = () => {
  return (
    <div className="buyer">
      <div>
        <h1>Buyer Portal</h1>
      </div>
      <div>
      <div>
        <div className='parent'>
          <div class="px-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Mango</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text"><b>Location :</b> durg</p>
                <p class="card-text"><b>price :</b> 100/kg</p>
                <a href="#" class="btn btn-primary">buy</a>
              </div>
            </div>
          </div>
          <div class="px-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Mango</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text"><b>Location :</b> durg</p>
                <p class="card-text"><b>price :</b> 100/kg</p>
                <a href="#" class="btn btn-primary">buy</a>
              </div>
            </div>
          </div>
          <div class="px-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Mango</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text"><b>Location :</b> durg</p>
                <p class="card-text"><b>price :</b> 100/kg</p>
                <a href="#" class="btn btn-primary">buy</a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
        
      </div>
        <button class='btn btn-primary'><Link to="/#home" >HOMEPAGE</Link></button>
    </div>
  )
}

export default Buyer