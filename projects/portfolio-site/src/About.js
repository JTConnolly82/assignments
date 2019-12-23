import React, {useState, useEffect} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import MobileLayout from './MobileLayout';



const About = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=> {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  })

  return (
    <div style={{justifySelf: 'center'}}>
    {/* {width < 438 ?  
      <MobileLayout />
    : */}
    {/* if window is bigger than 438 px render this homepage
    use diff styling etc  */}
    <div className='large-main-div'>
      <div className='home-link-div'>
        <Link to='/'><img src="https://img.icons8.com/small/31/000000/home.png" /></Link>
      </div>
      <div className='page-title'>
          <h1>About</h1>
      </div>
    </div>
    {/* } */}
      
    </div>
  )
}


export default About;

