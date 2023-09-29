import React from 'react'
import './Firstpage.css'
import Social from './Social'
import taiwo from '../../src/taiwo.jpg'


const Firstpage = () => {
  return (
    <div className='firstpage-con'>
      <div className='firstpage-left'>
        <img src={taiwo} width="250px" hight="300px"  alt="taiwo" className='my-image' /> 
    

      </div>
      <div className='firstpage-right'>
        <h1>ALLI TAIWO SHOLA </h1>


        <h3>I AM A FRONTEND DEVELOPER </h3>
        <h3>Creativity!!! Integrity!!! Reliability</h3>
        <div className='portfolio-link'>
          <a href="/Contact">
            <button className='first-btn'>Hire Me</button>
          </a>
          <a href="/Resume">
            <button className='first-btn'>Get Resume</button>
          </a>
        </div>
       
        <Social />
        <div id='moves'>
          <p>Hey there! Are you ready to improve your business,upskill and unleash your entrepreneurial spirit?
            Taiwo Solution got you covered for you Creative Web Sites.
          </p>

        </div>

      </div>

      
      

    </div>
    
  )
}

export default Firstpage