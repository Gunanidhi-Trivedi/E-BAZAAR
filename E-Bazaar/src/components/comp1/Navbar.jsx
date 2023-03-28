import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {

  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  
  const navigate = useNavigate()

  const[lang,setlang] = useState("ENGLISH")
  
  function services() {
    navigate("/#services")
  }
  function contact() {
    navigate("/#contact")
  }
  function home() {
    navigate("/#home")
  }

  function changeLang(){
    if(lang == "ENGLISH")
    {
      setlang("HINDI")
    }
    else{
      setlang("ENGLISH")
    }
  }

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bgnav">
          <img className='imgsize' src={logo} alt="logo" />
          <div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a onClick={home} className="nav-item nav-link text-white px-4" href="#home">HOME</a>
              <a onClick={services} className="nav-item nav-link text-white px-4" href="#services">SERVICES</a>
              <a onClick={contact} className="nav-item nav-link text-white px-4" href="#contact">CONTACT</a>

              <a onClick={changeLang} className="nav-item nav-link text-white px-4" href="#language">{lang}</a>

              {isAuthenticated && (
              <li className="userName">
              <p> {user.name} </p>
              </li>
              )}
           

            <li>
             {isAuthenticated ? 
                  (<li>
                  <button className="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                  </li>)  :  
                          (<li>
                          <button className="button" onClick={() => loginWithRedirect()}>Log In</button>
                          </li>)}
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