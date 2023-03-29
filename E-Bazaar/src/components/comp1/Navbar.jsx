import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
  
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

  function gologin() {
    navigate("/#login")
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

              <div id='google_element'></div>

              <a onClick={changeLang} className="nav-item nav-link text-white px-4" href="#language">{lang}</a>

                  <a className='nav-item nav-link text-white px-4'>
                   <h6> <Link onClick={gologin} to="/login" >LOG IN</Link> </h6>
                  </a>

            </div>
          </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar