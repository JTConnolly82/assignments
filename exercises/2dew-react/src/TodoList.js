import React from 'react';
import Todo from './Todo';




class TodoList extends React.Component {

  listStyles = {
    display: 'grid',
    gridTemplateColumns: '300px 300px',
    gap: '7px'
  }

  render() {

    let todoComponents = this.props.todos.map((todo)=>{
      return <Todo key={Math.random() * 88} 
                   todo={todo}
                   handleDeleteClick={()=>this.props.handleDeleteClick(todo)} 
                    />
    });

    return (
      <div style={this.listStyles}>
        {todoComponents}
      </div>
    )
  }



}


export default TodoList;
