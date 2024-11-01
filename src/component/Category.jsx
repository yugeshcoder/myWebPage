import React, { useState } from 'react'

function Category(props) {
  return (
    <div className='category'>
      <button className= {props.currentCategory === 'plain' ? 'active' : ''} 
        onClick={() => props.setCurrentCategory('plain')}>Plain</button>
      <button className= {props.currentCategory === 'moulding' ? 'active' : ''} 
        onClick={() => props.setCurrentCategory('moulding')}>Moulding</button>
    </div>
  )
}

export default Category
