import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'



const Nav = () => {

  

  return (
    <div className='nav-container'>
      <Link className='nav-name' to="/">John Connolly</Link>
      <div className='nav-links'>
        <h3>Work</h3>
        <h3>About</h3>
      </div>
    </div>
  )
}

export default Nav;
