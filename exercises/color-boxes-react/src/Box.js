import React from 'react';




const Box = (props) => {

  let boxSteeze = {
    backgroundColor: props.bgc,
    width: "60%",
    height: "200px",
    marginBottom: '9px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.3rem',
    padding: '15px'
  }

  return (
    <div style = {boxSteeze}>
      <h2>{props.title}</h2>
      <h4>{props.subtitle}</h4>
      <p>{props.information}</p>
    </div>
  )
}

export default Box;