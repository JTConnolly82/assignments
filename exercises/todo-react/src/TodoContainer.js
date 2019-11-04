import React from 'react';
import axios from 'axios';
import Todo from './Todo';


class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      price: '',
      imgUrl: '',
      todos: []
    }
  }

  componentDidMount(){
    axios.get('https://api.vschool.io/johnconnolly/todo/').then((res)=>{
      this.setState({
        todos: res.data
      })
    });
  }

  containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }


  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      completed: false,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      imgUrl: this.state.imgUrl
    }
    this.setState((prev)=>{
      prev.todos.unshift(newTodo);
      return prev;
    })

  }



  render() {
    let todoComponents = this.state.todos.map((todo) => {
      return <Todo key={Math.random() * 88} 
                   title={todo.title} 
                   description={todo.description}
                   price={todo.price}
                   imgUrl={todo.imgUrl}
                   id={todo._id}  />
    })
    
    return (
      <div style={this.containerStyles}>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name='title' placeholder='title' />
          <input onChange={this.handleChange} name='description' placeholder='description' />
          <input onChange={this.handleChange} name='price' placeholder='price' />
          <input onChange={this.handleChange} name='imgUrl' placeholder='image url' />
          <button>Submit!</button>
        </form>
        <div>
          {todoComponents}
        </div>
      </div>
    )
  }



}


export default TodoContainer;
