import plainBeadingObj from "../../../data/plainBeading";
import { useState } from "react";
import { Link } from "react-router-dom";

import React from 'react'



function Plain() {
  const[fullScreenImg , setFullScreenImg] = useState("");
  const[xAxis, setXAxis] = useState(0);
  const[yAxis, setYAxis] = useState(0);

  const plainProduct = plainBeadingObj.map((product,index) => {
    
      return(
        <div className='plainList' key={index}>
          <img  src={product.image} onClick={(e) => setFullScreenImg(product.image)}></img>
          <div className='productDescription'>
            <h2>Descriptions</h2>
            <h3>Size</h3>
            <ul>
              { product.size.map((size,index) => {
                  return(
                    <li key={index}>: {size}mm</li>
                  )
                })
              }
            </ul>
            <br/>
            <h3>Material</h3> 
            <p>: {product.material}</p>
            <br/>
            <h3>Quality</h3> 
            <p>: {product.quality}</p>
            <br/>
            <h3>Recommended</h3>
            <ul>
              <li> : {product.recommended[0]}</li>
              <li> : {product.recommended[1]}</li>
            </ul>
            <br/>
            <div className="enquiry"><Link to='/contact'>Enquiry / Order</Link></div>
          </div>
        </div>
      )
  })

  return (
    <>
      {plainProduct},
      {(fullScreenImg) ?
      <div className="fullScreenDiv">
        <img className="fullScreen" src={fullScreenImg}/>
        <button className="close" onClick={() => setFullScreenImg("")}>close</button>
      </div> 
      : ''} 
    </>
  )
}

export default Plain
