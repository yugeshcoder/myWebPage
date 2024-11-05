import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/calc'>Feet Calculater</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
