import React from 'react'
import './farmer.css'

import { Link } from 'react-router-dom'

const Farmer = () => {
  return (
    <div className="farmer">
        <h1>Farmer Portal</h1>
        <Link to="/#home" >HOMEPAGE</Link>
    </div>
  )
}

export default Farmer