import React from 'react';



const Todo = (props) => {

  let todoStyle = {
    border: '1px solid grey'
  }


  return (
    <div style={todoStyle}>
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>
      <h4>{props.price}</h4>
      <img src={props.imgUrl} alt=""/>
    </div>
  )
}

export default Todo;
