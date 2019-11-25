import React, {useState, useEffect} from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import LargeHome from './LargeHome';


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
            <div className='inner-label-div'>
              <h1>Projects 💻</h1>
            { projectDisplay && 
              <div className='hiddenDiv'>
                <h3>list of projects w links & screenshots</h3>
                <h3>Description of what i like to work on</h3>
                <h3>favorite Frameworks, languages, etc</h3>
                <h3>link to resume?</h3>
                <h3>Github link</h3>
              </div>
            }
            { !projectDisplay ?
              <IoIosArrowDown style={{color: 'black', borderRadius: '3px'}}/>
              :
              <IoIosArrowUp style={{color: 'black', borderRadius: '3px'}}/>
            }
          </div>
        </div>
        <div className='label-div' id='aboutBG' onClick={()=> setAboutDisplay(!aboutDisplay)}>
         <div className='inner-label-div'>
          <h1>About 👋</h1>
          { aboutDisplay && 
            <div className='hiddenDiv' >
              <h3>picture of me</h3>
              <h3>Work experience</h3>
              <h3>more?</h3>
              <h3>outdoors pics?</h3>
            </div>
          }
          { !aboutDisplay ?
            <IoIosArrowDown style={{color: 'black', borderRadius: '3px'}}/>
            :
            <IoIosArrowUp style={{color: 'black', borderRadius: '3px'}}/>
          }
          </div>
        </div>
        <div className='label-div' id='contactBG' onClick={()=> setContactDisplay(!contactDisplay)}>
          <div className='inner-label-div'>
          <h1>Contact 📱</h1>
          { contactDisplay && 
            <div className='hiddenDiv'>
              <h3>link to email</h3>
              <h3>Social links</h3>
            </div>
          }
          { !contactDisplay ?
            <IoIosArrowDown style={{color: 'black', borderRadius: '3px'}}/>
            :
            <IoIosArrowUp style={{color: 'black', borderRadius: '3px'}}/>
          }
          </div>
        </div>
        {/* <footer className='label-div' id='footerBG'>
            <h3>Footer</h3>
            <h3>Social links</h3>
        </footer> */}
      </div>
    :
    // if window is bigger than 438 px render this homepage
    // use diff styling etc 
    <LargeHome />
    }
  </div> 
    
  )
}

export default Home;
 