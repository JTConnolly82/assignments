import React from 'react';
import Todo from './Todo';



const TodoList = (props) => {

let todoComponents = props.todos.map((todo)=>{
  return <Todo key={Math.random()*44}
               title={todo.title} 
               description={todo.description}
               price={todo.price}
               imgUrl={todo.imgUrl} />
});
  return (
    <div>
      {todoComponents}
    </div>
  )
}

export default TodoList;
