import React from 'react'
import './Social.css'
import linkedin from '../images/linkedin.svg'
import gmail from '../images/gmail.svg'
import github from '../images/github.svg'

const Social = () => {
  return (
    
        <div className="social-box">
           <a href="https://www.linkedin.com/in/olabayo-antonio-714026235" >
           <img src= {linkedin} alt="mysocial" /></a>
           <a href= "/contact"><img src= {gmail} alt="mysocial" /></a>
           <a href= "https://github.com/Taiwo32?tab=repositories"><img src= {github} alt="mysocial" /></a>
        </div>
    
  )
}

export default Social