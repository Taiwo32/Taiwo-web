import React from 'react'
import taiwo from '../../src/taiwo.jpg'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial-all'>
        <div className='testimonial-header'>
            <h1>Testimonies & Recommendations</h1>
        </div>
        <div className='testimonial-body'>
            <div className='test-boxes'>
                <div className='test-boxes1'>
                    <div>
                       <img src={taiwo} width="100px" height="100px"  alt = 'taiwo' className = "myImage"/>
                       <h2>Alli Taiwo Shola</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima porro quas.</p>
                    </div>
                    <div>
                        <img src={taiwo} width="100px" height="100px"  alt = 'taiwo' className = "myImage"/>
                        <h2>Alli Taiwo Shola</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima porro quas.</p>
                    </div>
                </div>
                <div className='test-boxes2'>
                    <div>
                        <img src={taiwo} width="100px" height="100px"  alt = 'taiwo' className = "myImage"/>
                        <h2>Alli Taiwo Shola</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima porro quas.</p>
                    </div>
                    <div>
                        <img src={taiwo} width="100px" height="100px"  alt = 'taiwo' className = "myImage"/>
                        <h2>Alli Taiwo Shola</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima porro quas.</p>
                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Testimonial