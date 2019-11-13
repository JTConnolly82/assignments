import React from 'react';


const Home = () => {

  const rocketPic = {
    width: '400px',
    height: '500px',
    padding: '6px',
    backgroundImage: 'linear-gradient(to top left, #df431d -12%, #d3d3d3 98%)',
    alignSelf: 'center',
    marginTop: '70px',
    borderRadius: '2px'
  }

  


  return (
    <div className='home-wrap'>
     <div>
      <img style={rocketPic} src="https://fsmedia.imgix.net/da/c9/dc/31/71d9/4020/a90c/48225e0acdf1/the-starship-mk1-at-the-boca-chica-facility-in-texas.jpeg" alt="big rocket"/>
     </div>
    </div>
  )
}


export default Home;