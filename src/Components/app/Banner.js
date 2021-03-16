import React from 'react'
import bannerimage from './assests/body-image.png'
import '../../App.css'
import Header from './Header'
export default function Banner() {
    return (
    <>
        <div className="banner-section flex-wrapping1">
             <div className='banner-section-text'>
                    <p className='main-text'> Hello I'm <span> Bhaskar H.S</span></p>
                    <p className='subheading-text'>UI Designer And FrontEnd Developer</p>
                    <div className='button-wrap'>
                        <button className='btn know-morebtn'>
                            KNOW MORE
                        </button>
                        <button className='btn hireme'>
                           <a href='https://drive.google.com/drive/u/0/my-drive' download> RESUME</a>  
                        </button>
                    </div>
             </div>
             <div className="banner-section-image">
                 <img src={bannerimage}/>
             </div>
        </div>
    </>
    )
}
