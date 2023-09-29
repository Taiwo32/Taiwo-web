import React from 'react'
import ServiceRed from './ServiceRed'
import html from '../../src/images/html.svg'
import css from '../../src/images/css.svg'
import javascript from '../../src/images/javascript.svg'
import react from '../../src/images/react.svg'
import git from '../../src/images/git.svg'
import bootstrap from '../../src/images/bootstrap.svg'

import './ServiceRed.css'
const Services = () => {
  return (
    <div className='service'>
        <h1>Service I Render</h1>
        <p>
            I offer various services ranging from instructor led trainings , responsive website design, app developments and so on. <br />
            Some can be seen below....
        </p>
        <div className='topRendered'>
            <ServiceRed bimage={html} bigtext={'HTML'} smalltext={'I design websites from its skeletal system "HTML" and code from the scratch.'} />
            <ServiceRed bimage={css} bigtext={'CSS'} smalltext={'I give nice styling and templates to websites and makes sure its fully responsive.'} />
            <ServiceRed bimage={javascript} bigtext={'JAVASCRIPT'} smalltext={'I Help  add dynamism to websites by using the Javascript programming language. '} />
        </div>
        <div className = "bottomRendered">
        <ServiceRed bimage={react} bigtext={'REACT.JS'} smalltext={'I use various frameworks to make world-class projects '} />
        <ServiceRed bimage={git} bigtext={'GIT'} smalltext={'Knowledgable about the git version control system and its commands for managing projects remotely.'} />
        <ServiceRed bimage={bootstrap} bigtext={'BOOTSTRAP'} smalltext={'Design more user friendly websites using bootstrap.'} />
        </div>
    </div>
  )
}

export default Services