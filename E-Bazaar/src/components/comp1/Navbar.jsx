import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {

  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  
  const navigate = useNavigate()
  
  function services() {
    navigate("/#services")
  }
  function contact() {
    navigate("/#contact")
  }
  function home() {
    navigate("/#home")
  }

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bgnav">
          <img className='imgsize' src={logo} alt="logo" />
          <div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a onClick={home} class="nav-item nav-link text-white px-4" href="#home">HOME</a>
              <a onClick={services} class="nav-item nav-link text-white px-4" href="#services">SERVICES</a>
              <a onClick={contact} class="nav-item nav-link text-white px-4" href="#contact">CONTACT</a>

              {isAuthenticated && (
              <li class="userName">
              <p> {user.name} </p>
              </li>
              )}
           

            <li> 
             {isAuthenticated ? (
              <li>
              <button class="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
              </li>
            ) : (
              <li>
              <button class="button" onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            )}
            </li>

            </div>
          </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar