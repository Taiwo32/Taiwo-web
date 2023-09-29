import React from 'react'
import Navbar from '../Components/Navbar'
import Firstpage from '../Components/Firstpage'
import About from '../Components/About'
import Education from '../Components/Education'
import Services from '../Components/Services'
import Experience from '../Components/Experience'
import Project from '../Components/Project'
import Testimonial from '../Components/Testimonial'
import Con from '../Components/Con'
import Fotter from '../Components/Fotter'

const Hompage = () => {
  return (
    <div>
        <Navbar />
        <Firstpage />
        <About />
        <Education />
        <Services />
        <Experience />
        <Project />
        <Testimonial />
        <Con />
        <Fotter />
    </div>
  )
}

export default Hompage