import React from 'react'
import logo from '../../assets/logo.png'
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
              <a class="nav-item nav-link text-white px-4" href="#home">HOME</a>
              <a class="nav-item nav-link text-white px-4" href="#services">SERVICES</a>
              <a class="nav-item nav-link text-white px-4" href="#contact">CONTACT</a>
              <a class="nav-item nav-link text-white px-4" href="#login">LOGIN</a>
            </div>
          </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar