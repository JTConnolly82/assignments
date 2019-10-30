import React from 'react';
import Pet from './Pet.js';


const PetsContainer = (props) => {

  let mappedPets = props.pets.map((pet)=> {
    return <Pet name={pet.name} breed={pet.breed} />
  });

  return (
    <div>
      {mappedPets}
    </div>
  )
}

export default PetsContainer;