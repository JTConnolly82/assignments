import React from 'react';
import './Home.css';
import AptSearchbar from './AptSearchbar';



class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='home-hero'>
            {/* <h1>Rental Unit Reviews</h1> */}
            <h2>Read apartment unit reviews</h2>
              <AptSearchbar />
        </div>
        <div className='home-content'>
          <div className='home-statement'>
            <h2>
              Learn about your new apartment rental before you move in.
              Read our tenant reviews.
            </h2>
          </div>
          <div id='apt-wrap'>
              <div className='text-wrap'>
                <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
                elementum, elit sit amet tincidunt congue, lacus est semper risus, quis. 
                </h3>
              </div>
              <div id='interior-icon-div'>
                <img id='interior-icon' src={process.env.PUBLIC_URL + '/interior.png'} />
              </div>
            </div>
            <div id='phone-wrap'>
              <div id='phone-icon-div'>
                <img id='phone-icon' src={process.env.PUBLIC_URL + '/phonepic.png'} />
              </div>
              <div className='text-wrap'>
                <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
                elementum, elit sit amet tincidunt congue, lacus est semper risus, quis. 
                </h3>
              </div>
            </div>
            <div id='apt-wrap'>
              <div className='text-wrap'>
                <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
                elementum, elit sit amet tincidunt congue, lacus est semper risus, quis. 
                </h3>
              </div>
              <div id='apt-icon-div'>
                <img id='apt-icon' src={process.env.PUBLIC_URL + '/apartmenthome.png'} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}


export default Home;