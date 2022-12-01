import React from 'react'
import ImagenFondo from "./pngegg.png";

import {
  Card,
  CardTitle,
} from 'reactstrap';

import "./CarrouselJs.css"

const CarouselJs = () => {
  return (
    <>
  <div className="FrontHome">
        <div className='FrontHomeDivition'>
            <h1 className='title'>{"Art clan from Rosario."}</h1>
            <h6 className='sub-title'>Disvoer a new world in coming.</h6>
            <h4 className='description' >Over the thinking making art fasfasfasf asfasfasking art fasfasfasf asfasfas ahaqwqwte 642gsdsdg asffa</h4>
            <h4 className='description' >The code above accesses just that, the target element’s value, and shows it inside a browser alert. The e.target.value is originating from the value attribute that’s on the actual button element.</h4>
        </div>

        <div className='FrontHomeDivition'>
          <div  tag="h4">
          <img className='imageFondo' src={ImagenFondo} alt="asd"></img>
          </div>
        </div>
  </div>
        </>
  )
}

export default CarouselJs