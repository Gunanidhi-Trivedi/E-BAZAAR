import React from 'react'
import './buyer.css'

import { Link } from 'react-router-dom'

const Buyer = () => {
  return (
    <div className="buyer">
        <h1>Buyer Portal</h1>
        <Link to="/#home" >HOMEPAGE</Link>
    </div>
  )
}

export default Buyer
