import React from 'react'
import '../../App.css'
import './Works.css'
import image from '../app/assests/group6.png'
import image1 from '../app/assests/group7.png'
import image2 from '../app/assests/group8.png'

export default function Works() {
    return (
        <div className='works-section'>
            <div>
                <div className="rectangleshape"></div>
                <p className="heading-test">My Works</p>
            </div>
            <div className="works work1">
                <div className='work-image'>
                    <img src={image} />
                    <div className="description">
                        <p className="p-name"> <span> Name: </span>Qrowd product </p>
                        <p className="p-size"> <span> Team Size: </span>2 </p>
                        <p className="p-description"> <span> Project Description: </span> This website is all about the qrowd , this is buit to present to client and to them what qrowd is , and what they willget from qrowd app. </p>
                        <p className="p-contribution"> <span> My contribution: </span>The layout and front-end developing of this project  </p>
                        
                    </div>
                 </div>
                 <div className='work-image'>
                    <img src={image1} />
                    <div className="description">
                        <p className="p-name"> <span> Name: </span>Qrowd.fit </p>
                        <p className="p-size"> <span> Team Size: </span>3 </p>
                        <p className="p-description"> <span> Project Description: </span> Qrowd is an web app and andriod app which is build on the moto of having the social 
                            networking specially for fitness people , this project is an social networking app  with social validation and private chat  </p>
                        <p className="p-contribution"> <span> My contribution: </span> UI designing using figma and Front-End developing of entire web app . </p>
                        
                    </div>
                 </div>
                 <div className='work-image'>
                    <img src={image2} />
                    <div className="description">
                        <p className="p-name"> <span> Name: </span>Aitareya Solutions portfolio </p>
                        <p className="p-size"> <span> Team Size: </span>4 </p>
                        <p className="p-description"> <span> Project Description: </span> : This website is all about Aitareya solutions portfolio , </p>
                        <p className="p-contribution"> <span> My contribution: </span> Converting desktop layouts 
                            to responsive layout and readjusting sizes of images using  photoshop   </p>
                    </div>
                 </div>
            </div>
        </div>
    )
}
