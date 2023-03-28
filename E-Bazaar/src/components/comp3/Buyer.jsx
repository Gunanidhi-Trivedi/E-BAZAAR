import React from 'react'
import './buyer.css'

import { Link, useNavigate } from 'react-router-dom'

const Buyer = () => {

  const navigate = useNavigate()

  function buycrop() {
    navigate("/buycrop")
  }
  function preorder() {
    navigate("/preorder")
  }

  return (
    <div className='buyer'>
      <div>
        <h1>Buyer Portal</h1>
      </div>
      <div className='parent'>
        <div class="px-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">PURCHASE CROPS IN STOCK</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a onClick={buycrop} href="" class="btn btn-primary">BUY PITCHED CROP</a>
              </div>
            </div>
          </div>
          <div class="px-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">MAKE A PRE-ORDER FOR CROP YOU NEED</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a onClick={preorder} href="" class="btn btn-primary">MAKE PRE-ORDER</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Buyer
