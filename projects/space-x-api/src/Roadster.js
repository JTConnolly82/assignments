import React from 'react';
import axios from 'axios';



class Roadster extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
      earthDistance: 0,
      marsDistance: 0
    }
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/roadster').then((res)=> {
      this.setState({
        details: res.data,
        earthDistance: res.data.earth_distance_mi,
        marsDistance: res.data.mars_distance_mi
      })
    })
  }

  handleRange(e) {
    console.log(e);
  }


 


  render() {
    let {details} = this.state;

    // mars is about 38.6 million miles from earth
    const totalDistance = 35500000
    //mars total divided by dist. covered by car
    let percentageWayThere = this.state.earthDistance / totalDistance;
    console.log(percentageWayThere);
   
    let carPic = {
      maxWidth: '700px'
    }

    let starmanDeets = {
      padding: '20px',
      color: '#969b9f'
    }

    let statBar = {
      padding: '12px',
      // backgroundImage: 'linear-gradient(to top left, #df431d -12%, #d3d3d3 98%)',
    }

    let statInner = {
      padding: '6px',
      backgroundColor: '#000000',
      color: '#969b9f'
    }

    let sliderDiv = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'auto'
    }

    return (
      <div className="whole-roadster">
        <div className='title-div-roadster'>
          <img style={carPic} src="https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003831957224.jpg" alt="starman-tesla"/>
          <h1>Starman</h1>
        </div>
        <div style={starmanDeets}>
          <p>{details.details}</p>
        </div>
        <div className='roadster-info'>
            <div className="roadster-distance-wrap">
              <div className='scale-size'>
                <img id='earth' src="http://pngimg.com/uploads/earth/earth_PNG7.png" alt="earth"/>
                <img style={{marginLeft: `${percentageWayThere}%`, maxWidth: '40px', alignSelf: 'center'}} src="http://pngimg.com/uploads/tesla_car/tesla_car_PNG56.png" alt="roadster"/>
                <img id='mars' src="http://pngimg.com/uploads/mars_planet/mars_planet_PNG23.png" alt="mars"/>
              </div>
              <div style={statBar}>
                <h3>Allow switch between metric and imperial</h3>
                <h3>distance from earth: {details.earth_distance_mi}</h3>
                <h3>distance from mars: {details.mars_distance_mi}</h3>
                <h3>Days in flight: {details.period_days}</h3>
                <h3>Weight: {details.launch_mass_lbs} lb</h3>
                <h3>Current Speed (mph): {details.speed_mph}</h3>
              </div>
            </div>
          </div>
      </div>
    )
  }
}


export default Roadster;
