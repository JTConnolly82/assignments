import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './styles.css'



const Nav = () => {
  
    const [width, setWidth] = useState(window.innerWidth);
    

    useEffect(()=> {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    })
  

  return (
    <div className='nav-container'>
      <div className='inner-nav'>
      {width < 438 ?
        <>
          {/* <div className='phone-hero'>
            
          </div> */}
        </>
            :
            <div className='nav-links'>
            <Link to='/projects'>
              <span id='projects-link'>
                <span className='inner-nav-link'>
                  <h3>Projects</h3>
                </span>
              </span>
            </Link>
            <Link to='/about' >
              <span id='about-link'>
                <span className='inner-nav-link'>
                  <h3>About</h3>
                </span>
              </span>
              </Link>
              <Link to='/contact'>
                <span id='contact-link'>
                  <span className='inner-nav-link'>
                    <h3>Contact</h3>
                  </span>
                </span>
              </Link>
            </div> 
            } 
      </div>
    </div>
  )
}

export default Nav;
