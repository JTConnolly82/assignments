import React from 'react';




const Todo = (props) => {

  const todoStyles = {
    border: '1px solid grey'
  }
  return (
    <div style={todoStyles}>
      <h3>{props.todo.title}</h3>
      <h4>{props.todo.description}</h4>
      <img src={props.todo.imgUrl} alt=""/>
      <div>
        <button onClick={()=>props.handleDeleteClick(props.todo)}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  )
}


export default Todo;
