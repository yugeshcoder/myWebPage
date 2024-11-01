import React from 'react'
import Plain from './productSubComponent/Plain'
import Moulding from './productSubComponent/Moulding'
import Category from './Category'

function Products(props) {
  return (
    <main>
      <Category currentCategory = {props.currentCategory} setCurrentCategory = {props.setCurrentCategory}/>
      {(props.currentCategory === 'plain') ? <Plain/> : <Moulding/>}
    </main>
  )
}

export default Products
