import React from 'react'
import '../app/Skills.css'
import '../../App.css'

export default function Skills() {
    return (
        <div className="skill-wrap">
            <div>
                <div className="rectangleshape"></div>
                <p className="heading-test"> Skills </p>
            </div>
            <div className="each-skill skills">
                <span className="skillname">
                    Html : 
                </span>
                <div className="progressbar html"> <span></span></div>
            </div>
            <div className="each-skill skills">
                <span className="skillname">
                    css : 
                </span>
                <div className="progressbar css"> <span></span></div>
            </div>
            <div className="each-skill skills">
                <span className="skillname">
                    javascript : 
                </span>
                <div className="progressbar js"> <span></span></div>
            </div>
            <div className="each-skill skills">
                <span className="skillname">
                    Bootstrap : 
                </span>
                <div className="progressbar bootstrap"> <span></span></div>
            </div>
            <div className="each-skill skills">
                <span className="skillname">
                    UI design : 
                </span>
                <div className="progressbar uidesign"> <span></span></div>
            </div>
            <div className="each-skill skills">
                <span className="skillname">
                    react/react-native : 
                </span>
                <div className="progressbar react"> <span></span></div>
            </div>
        </div>
    )
}
