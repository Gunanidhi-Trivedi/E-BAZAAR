import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {

  const navigate = useNavigate()
  
  function services() {
    navigate("/#services")
  }
  function contact() {
    navigate("/#contact")
  }
  function login() {
    navigate("/#")
  }

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bgnav">
          <img className='imgsize' src={logo} alt="logo" />
          <div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link text-white px-4" href="/">HOME</a>
              <a onClick={services} class="nav-item nav-link text-white px-4" href="#services">SERVICES</a>
              <a onClick={contact} class="nav-item nav-link text-white px-4" href="#contact">CONTACT</a>
              <a onClick={login} class="nav-item nav-link text-white px-4" href="#">LOGIN</a>
            </div>
          </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar