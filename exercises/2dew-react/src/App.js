import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }


  appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  componentDidMount(){
    axios.get('https://api.vschool.io/johnconnolly/todo/').then((res)=>{
      this.setState({
        todos: res.data
      })
    })
  }
  
  handleSubmit = (formState) => {
    axios.post('https://api.vschool.io/johnconnolly/todo/', formState).then((res)=>{ 
    this.setState((prevState)=>{
      let newTodos = [...prevState.todos];
      newTodos.unshift(res.data);
      return {todos: newTodos}
    });
    });
  }

  handleDeleteClick = (deletedTodo) => {
    axios.delete('https://api.vschool.io/johnconnolly/todo/' + deletedTodo._id).then((res)=>{
      this.setState((prev)=>{
        let copiedTodos = [...prev.todos];
        copiedTodos.filter((todo)=>{
          return todo._id !== deletedTodo._id
        });
        return {todos: copiedTodos};
      });
    });
  }



  render() {
    return (
      <div style={this.appStyle}>
        <Form handleSubmit={this.handleSubmit} />
        <TodoList handleDeleteClick={this.handleDeleteClick} todos={this.state.todos} />
      </div>
    )
  }


}

export default App;