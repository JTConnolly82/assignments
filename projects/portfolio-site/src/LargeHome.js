import React from 'react';
import {Link} from 'react-router-dom';
import ParticleComponent from './ParticleComponent';
import './styles.css';



const LargeHome = () => {
  return (
    <div className='large-main-div'>
      <div id='home-main'>
        <div className='top-home'>
          <h1>John Connolly</h1>
        </div>
        <div className='home-card'>
          <ParticleComponent />
          <div className='large-home-statement'>
            <h3>Software developer based in Salt Lake City, Utah.</h3>
          </div>
          <div className='home-buttons'>
            <button className='the-buttons-home' id='project-button'><Link to='/projects'>Projects</Link></button>
            <button className='the-buttons-home' id='about-button'><Link to='/about'>About</Link></button>
            <button className='the-buttons-home' id='contact-button'><Link to='/contact'>Contact</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LargeHome;