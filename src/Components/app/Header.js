import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'



function Header() {
    const [menushow , setMenuShow] = useState(false)
    const menuBtnclick = () => {
        return(
            setMenuShow(true)
        )
    }
    const menuclose = () => {
        return(
            setMenuShow(false)
        )
    }
    


   return(
       <>
       <div className="section1">
            <div className="section-header-menu flex-wrapping">
                <div className="logowrap">
                      <p className="logo">
                        <Link to='/'>BHASKAR</Link>
                    </p>
                </div>
               
                <div className={  menushow === true ? "main-menu" : "main-menuactive" }>
                    <ul className='flex-wrapping1 list-wrap'>
                        <li className='menu-list' onClick={() => menuclose()} >
                            <Link to='/knowmore'>KnowMore</Link> 
                        </li>
                        <li className='menu-list' onClick={() => menuclose()} >
                            <Link to='/skills'>Skills</Link>
                        </li>
                        <li className='menu-list' onClick={() => menuclose()} >
                            <Link to='/services'>Services</Link>
                        </li>
                        <li className='menu-list' onClick={() => menuclose()} >
                            <Link to='/works'>Works</Link>
                        </li>
                        <li className='menu-list' onClick={() => menuclose()} >
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='hamburger-menu'>
                    {
                      menushow === false ?  <i className="fas fa-bars"  onClick = {() => menuBtnclick()}></i> :
                       <i className="fas fa-times" onClick={() => menuclose()}></i>
                    }
                    
                </div>
            </div>
            
       </div>
          
        
        
       </>
   )
}

export default Header;