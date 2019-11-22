import React from 'react';



 // firstName: 'Lando',
  //   lastName: 'Calrissian',
  //   alive: 'true',
  //   amount: '5000',
  //   type: 'jedi',
  //   _id: '1'


const Jedi = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.firstName} {props.lastName}</h2>
      <h3>{props.alive === 'true' ? 'alive' : 'dead'}</h3>
      <h3>Bounty Amount: {props.amount}</h3>
      <h4>{props.type === 'jedi' ? 'jedi' : 'sith' }</h4>
    </div>
  )
}



export default Jedi;