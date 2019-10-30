import React from 'react';


const Pet = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.breed}</h3>
    </div>
  )
}

export default Pet;