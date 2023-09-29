import React from 'react'
import './ServiceRed.css'

const ServiceRed = ({bimage, bigtext, smalltext }) => {
  return (
    <div className = 'renderSize'>
       <img src = {bimage} alt= 'mine' />
       <h3 className = 'sizecolor'>{bigtext}</h3>
       <p className = 'sizecolor'>{smalltext}</p>
    </div>
  )
}

export default ServiceRed