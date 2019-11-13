import React from 'react';


const Picture = (props) => {

  let picStyle = {
    maxHeight: '150px',
    maxWidth: '90px'
  }

  return (
    <>
    <img style={picStyle} src={`${props.picInfo}`} alt="launchpic"/>
    </>
  )
}

export default Picture;
