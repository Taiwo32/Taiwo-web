import React from 'react'
import Bayocontactmanager from '../../src/images/Bayocontactmanager.png'
import myportfolio from '../../src/images/myportfolio.png'
import newhorizon from '../../src/images/newhorizon.png'
import dicegame from '../../src/images/dicegame.png'
import tipcalculator from '../../src/images/tipcalculator.png'
import hotelwebsite from '../../src/images/hotelwebsite.png'
import './Project.css'

const Project = () => {
  return (
    <div className = "Myprojects">
        <div className = "project-header">
            <h1>Projects</h1>
            <p>Here are some of the projects i’ve partnered and worked on - CLICK TO ACCESS</p>
        </div>

        <div class="rowComponent project-container">
            <div className="box div1">
               <a href='https://bayo-contact-manager.netlify.app/#/' target="_blank" rel="noopener noreferrer"><img src ={Bayocontactmanager} alt="bayo1" /></a>
            </div>
            <div className="box div2">
                <a href='https://taiwodicewebsite.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={dicegame} alt="bayo2" /></a>
            </div>
            <div className="box div3">
                <a href='/' rel="noopener noreferrer"><img src={myportfolio} alt="bayo3" /></a>
            </div>
            <div className="box div4">
                <a href='https://newhorizonsabk.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={newhorizon} alt="bayo4" /></a>
            </div>
            <div className="box div5">
                <a href='https://bayo-tip-calculator.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={tipcalculator} alt="bayo5" /></a>
           </div>
           <div className="box div6">
                <a href='https://taiwo-hotel-website.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={hotelwebsite} alt="bayo6" /></a>
            </div>
        </div>
        
    </div>
  )
}
export default Project
