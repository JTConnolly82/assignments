import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }


  componentDidMount() {
    axios.get('https://api.vschool.io/johnconnolly/todo/').then((res)=>{
      this.setState({
        todos: res.data
      })
    });
  }

  handleSubmit = (todo) => {
    axios.post('https://api.vschool.io/johnconnolly/todo/', todo).then((res)=>{
      this.setState((prevState)=>{
        return {todos: [res.data, ...prevState.todos]}
      });
    });
  }


  render() {
    return(
      <div>
        <Form handleSubmit={this.handleSubmit} />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }


}

export default App;