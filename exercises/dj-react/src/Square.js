import React from 'react';



const Square = (props) => {
  
  let {color} = props;

  const styles = {
    backgroundColor: color,
    border: '1px solid black'
  }


  return (
    <div style={styles}>

    </div>
  )
}


export default Square;