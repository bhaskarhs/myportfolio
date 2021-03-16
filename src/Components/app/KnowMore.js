import React from 'react'
import '../../App.css'
import '../app/Knowmore.css'
import image from '../app/assests/knowmore.png'

export default function KnowMore() {
    return (
        <>
        <div className = "KnowMore-section">
            <div className="">
                <img src={image} className="knowmoreimage"/>
            </div>
            <div>
                <div>
                    <div className="rectangleshape"></div>
                    <p className="heading-test"> KNOW MORE</p>
                    <p className="heading-test">ABOUT ME</p>
                </div>
                <div>
                    <p className="about-text">
                    I`m a passionate UI designer and front-end developer with a keen eye for details .
                    </p>
                </div>
                <div className="download-btn--wrap">
                    <a 
                    className="download-button"
                    href="https://docs.google.com/document/d/1kbMKVQnkBnJ0emNC44RR3DY1GcrcmLzrLu47tEUA4O0/edit">
                        Download CV
                    </a>
                </div>
            </div>
            

        </div>
        
     </>
    )
}
