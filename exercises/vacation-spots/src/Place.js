import React from 'react';



const Place = (props) => {

  const {name, price, season} = props;

  const bgColor = (season) => {
    if (season === 'Spring') {
      return 'lightgreen'
    } else if (season === 'Summer') {
      return 'yellow'
    } else if (season === 'Fall') {
      return 'orange'
    } else {
      return 'lightblue'
    }
  }

  const placeStyles = {
    marginTop: '8px',
    width: '60vw',
    height: "188px",
    backgroundColor: bgColor(season),

  }

  const dollars = (price) => {
    if (price <= 500) {
      return '💰 💰'
    } else if (price <= 1000) {
      return '💰 💰'
    } else if (price > 1000) {
      return '💰 💰 💰'
    }
  }


 return (
   <div style={placeStyles}>
     <h2>Destination: {name}</h2>
     <h3>Price: ${price}</h3>
     <h4>Time To Go 👉 {season}</h4>
     <span>{dollars(price)}</span>
   </div>
 )
}

export default Place;