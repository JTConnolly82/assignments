import React, {useState, useEffect} from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './styles.css';


const Home = () => {
  
  const [width, setWidth] = useState(window.innerWidth);
  const [projectDisplay, setProjectDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [contactDisplay, setContactDisplay] = useState(false);

    useEffect(()=> {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    })
  
  
  return (

    <div className='home-container'>
    {width < 438 ?  
      <div className='label-div-wrapper'>
        <div className='label-div' id='projectBG' onClick={()=> setProjectDisplay(!projectDisplay)}>
            <h1>Projects</h1>
          { projectDisplay && 
            <div className='hiddenDiv'>
              <h3>Display</h3>
            </div>
          }
          { !projectDisplay ?
            <IoIosArrowDown style={{color: 'black', borderRadius: '3px'}}/>
            :
            <IoIosArrowUp style={{color: 'black', borderRadius: '3px'}}/>
          }
        </div>
        <div className='label-div' id='aboutBG' onClick={()=> setAboutDisplay(!aboutDisplay)}>
          <h1>About</h1>
          { aboutDisplay && 
            <div className='hiddenDiv' >
              <h3>Display</h3>
            </div>
          }
          { !aboutDisplay ?
            <IoIosArrowDown style={{color: 'black', borderRadius: '3px'}}/>
            :
            <IoIosArrowUp style={{color: 'black', borderRadius: '3px'}}/>
          }
        </div>
        <div className='label-div' id='contactBG' onClick={()=> setContactDisplay(!contactDisplay)}>
          <h1>Contact</h1>
          { contactDisplay && 
            <div className='hiddenDiv'>
              <h3>Display</h3>
            </div>
          }
          { !contactDisplay ?
            <IoIosArrowDown style={{color: 'black', borderRadius: '3px'}}/>
            :
            <IoIosArrowUp style={{color: 'black', borderRadius: '3px'}}/>
          }
        </div>
      </div>
    :
    // if window is bigger than 438 px render this homepage
    // use diff styling etc 
    <>
    I'm bigger than 438
    </>
    }
  </div> 
    
  )
}

export default Home;
 