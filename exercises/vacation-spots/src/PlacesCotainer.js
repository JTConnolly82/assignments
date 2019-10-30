import React from 'react';
import places from './places.json';
import Place from './Place';


const PlacesContainer = () => {

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

  let mappedPlaces = places.map((place)=>{
    return <Place 
                  key={Math.random() * 999} 
                  name={place.place} 
                  price={place.price} 
                  season={place.timeToGo} />
  })
  return (
    <div style={containerStyles}>
      {mappedPlaces};
    </div>
  )
}

export default PlacesContainer;