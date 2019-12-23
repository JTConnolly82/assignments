import React, {useState, useEffect} from 'react';
import LargeHome from './LargeHome';
// import MobileLayout from './MobileLayout';

import './styles.css';


const Home = () => {
  
  // const [width, setWidth] = useState(window.innerWidth);

  //   useEffect(()=> {
  //     const handleResize = () => setWidth(window.innerWidth);
  //     window.addEventListener('resize', handleResize);
  //   })
  
  
  return (

    <div className='home-container'>
    {/* if window is bigger than 438 px render this homepage
    use diff styling etc  */}
    {/* {width < 438 ?  
      <MobileLayout />
    : */}
    
    <LargeHome />
    {/* } */}
  </div> 
    
  )
}

export default Home;
 