import React from 'react'
import logo from '../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bgnav">
          <img className='imgsize' src={logo} alt="logo" />
          <div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link text-white px-4" href="#">Home </a>
              <a class="nav-item nav-link text-white px-4" href="#">Farmer</a>
              <a class="nav-item nav-link text-white px-4" href="#">Market Place</a>
              <a class="nav-item nav-link text-white px-4" href="#">Contact</a>
              <a class="nav-item nav-link text-white px-4" href="#">Login</a>
            </div>
          </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar