import React from 'react'
import './farmer.css'

import { Link, useNavigate } from 'react-router-dom'

const Farmer = () => {

  const navigate = useNavigate()
  
  function pitch() {
    navigate("/pitch")
  }
  function sell() {
    navigate("/sell")
  }
  function schemefn() {
    navigate("/govtschemes")
  } 

  return (
    <div className="farmer">
      <div>
        <h1>Farmer Portal</h1>
      </div>
      <div>
        <div className='parent'>
          <div class="px-5 mx-5 inner">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">SELL NEW CROPS</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a onClick={pitch} href="" class="btn btn-primary">MAKE A PITCH FOR YOUR CROP</a>
              </div>
            </div>
          </div>
          <div class="px-5 mx-5 inner">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">TAKE ORDER FOR CROPS IN DEMAND</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a onClick={sell} href="" class="btn btn-primary">SELL THE CROP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='schemes'>
        <a onClick={schemefn} href="">GET LATEST FARMER SCHEMES FROM GOVERNMENT</a>
      </div>
    </div>
  )
}

export default Farmer