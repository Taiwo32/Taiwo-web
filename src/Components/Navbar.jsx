import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navmain'>
        <div className='logo'>
            <h1>ATS</h1>

        </div>
        <div className='navright'>
            <ul>
                    <li><a href="/"> Home </a></li>
                    <li><a href="about.html"> Get Resume </a></li>
                    <li><a href="/Contact"> Contact </a></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar