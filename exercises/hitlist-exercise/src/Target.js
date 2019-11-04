import React from 'react';


const Target = (props) => {
  
  
  let imageStyles = {
    width: '300px',
    height: '300px'
  }

  let targetWrapStyle = {
    border: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '9px',
    borderRadius: '4px',
    backgroundColor: '#FDF5BB',
    fontFamily: 'Georgia, serif'
  }


  return (
    <div style={targetWrapStyle}>
      <h3>{props.name}</h3>
      <img style={imageStyles} src={props.image} alt={props.name} />
    </div>
  )
}


export default Target;