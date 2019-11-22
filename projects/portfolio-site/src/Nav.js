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
        <Link className='nav-name' to="/">John Connolly</Link>
        <hr style={{color: 'black', width: '80%'}}/>
            {width < 438 ?
          <div className='phone-hero'>
            <h2>Software developer based in Salt Lake City, UT 🏔💻 🏠🎿🏔</h2>
          </div>
            :
            <div className='nav-links'>
              <h3>Projects</h3>
              <h3>About</h3>
              <h3>Contact</h3>
            </div> 
            } 
      </div>
    </div>
  )
}

export default Nav;
