import React from 'react';
import PetsContainer from './PetsContainer'

 
const Friend = (props) => {

  let {name, age, pets} = props;

  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <PetsContainer pets={pets}/>
    </div>
  )
}

export default Friend;