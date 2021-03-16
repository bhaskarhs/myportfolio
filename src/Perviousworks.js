import React from 'react'
import './App.css'
// import './Previousworks.css'
import image1 from '../src/Components/app/assests/ui1.png'
import image2 from '../src/Components/app/assests/ui2.png'
import image3 from '../src/Components/app/assests/ui3.png'
import image4 from '../src/Components/app/assests/ui4.png'
import image5 from '../src/Components/app/assests/Capture5.png'
import image6 from '../src/Components/app/assests/Capture6.png'
// import image1 from '../src/Components/app/assests/ui1.png'

export default function Perviousworks() {
    return (
        <div className="previousworks-wrap">
             <div>
                <div className="rectangleshape"></div>
                    <p className="heading-test"> UI DESIGNS</p>
                    {/* <p className="heading-test">ABOUT ME</p> */}
                </div>
            <div className="uiworkswrap">
                <div>
                    <div className="imagewrap">
                        <img src= {image1}/>
                        <img src= {image2}/>
                    </div>
                    <p className="imagetext">
                    Mobile authentication screens
                    </p>
                </div>
                
                <div>
                    <div className="imagewrap">
                        <img src= {image3}/>
                        <img src= {image4}/>
                    </div>
                    <p className="imagetext">
                    Neuo morphic designs 2020 
                    </p>
                </div>
                <div>
                    <div className="imagewrap">
                        <img src= {image5}/>
                        <img src= {image6}/>
                    </div>
                    <p className="imagetext">
                    Welcome Screens 
                    </p>
                </div>
            </div>
            <div>
               
            </div>
            {/* previousworks */}
        </div>
    )
}
