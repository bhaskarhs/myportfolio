import React from 'react'
import '../../App.css'
import './services.css'

import image1 from '../app/assests/uipic.png'
import image2 from '../app/assests/html.png'
import image3 from '../app/assests/delivery.png'
// import image2 from '../app/assests/.png'
import image4 from '../app/assests/images.png'
import Works from './Works'

export default function Services() {
    return (
        <>
         
        <div className="service-section1">
        <div className="services-heading">
            <div className="rectangleshape"></div>
            <p className="heading-test">Services</p>
            {/* <p className="heading-test">ABOUT ME</p> */}
        </div>
        <div className="service-section">
        <div className ="service1" >
                <img src={image1}/>
                <div className="service1-desc">
                    <p>Look and Feel Design (UI)</p>
                </div>
            </div>
            <div className ="service1" >
                <img src={image2}/>
                <div className="service1-desc">
                    <p>Front End Web Developer</p>
                </div>
            </div>
            <div className ="service1" >
                <img src={image3}/>
                <div className="service1-desc">
                    <p>Delivery</p>
                </div>
            </div>
            <div className ="service1" >
                <img src={image1}/>
                <div className="service1-desc">
                    <p>UI Developer</p>
                </div>
            </div>
            <div className ="service1" >
                <img src={image4}/>
                <div className="service1-desc">
                    <p>React  / React native </p>
                </div>
            </div>
        </div>
            
        </div>
    </>
    )
}
