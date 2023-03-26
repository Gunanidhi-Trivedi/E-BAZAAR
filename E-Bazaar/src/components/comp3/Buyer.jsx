import React from 'react'
import './buyer.css'

import { Link } from 'react-router-dom'

const Buyer = () => {
  return (
    <div className="buyer">
        <h1>Buyer Portal</h1>
        <button class='btn btn-primary'><Link to="/#home" >HOMEPAGE</Link></button>
    </div>
  )
}

export default Buyer