import React from 'react'
import Nav from './Nav'
import Category from './Category'
import { useState } from 'react'

function Header() {
  
  return (
    <div className='head' id='mad'>
    <div className='companyName'> KALPANA WOOD WORKS</div>
    <Nav/>
    </div>
  )
}

export default Header
