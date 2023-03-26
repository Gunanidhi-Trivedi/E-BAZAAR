import React from 'react'
import './farmer.css'

import { Link } from 'react-router-dom'

const Farmer = () => {
  return (
    <div className="farmer">
        <h1>Farmer Portal</h1>
        <button class='btn btn-primary'><Link to="/#home" >HOMEPAGE</Link></button>
    </div>
  )
}

export default Farmer