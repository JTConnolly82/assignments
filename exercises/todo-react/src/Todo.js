import React from 'react';
import axios from 'axios';


class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      title: '',
      price: '',
      description: '',
      imgUrl: ''
    }
  }

  todoStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid grey',
    borderRadius: '5px',
    marginTop: '14px',
    padding: '7px'
  }

  todoTextStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '14px',
    alignItems: 'center'
  }

  deleteStyle = {
    marginTop: '6px',
    border: '.5px solid black',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '3px'
  }

  picStyle = {
    width: '300px'
  }

  handleDelete = () => {
    axios.delete('https://api.vschool.io/johnconnolly/todo/' + this.props.id).then((res)=>{
      console.log(res);
    });
  }

  handleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  editTodo = () => {

    axios.put('https://api.vschool.io/johnconnolly/todo/' + this.props.id, 
                  {title: this.state.title,
                   description: this.state.description,
                  imgUrl: this.props.imgUrl,
                  price: this.state.price,
                  } ).then((res)=>{
      console.log(res);
    });
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  render(){
   return( this.state.editing ? 
  
      <div style={this.todoStyles}>
        <div style={this.todoTextStyles}>
          <input name='title' onChange={this.handleChange} placeholder='title' />
          <input name='description' onChange={this.handleChange} placeholder='description' />
        </div>
        <input name='price' onChange={this.handleChange} placeholder='price' />
        <img style={this.picStyle} src={this.props.imgUrl} alt='placeholder' />
        <button onClick={this.handleDelete} style={this.deleteStyle}>Delete</button>
        <button onClick={this.editTodo} style={this.deleteStyle}>Submit</button>
      </div>
    :
      <div style={this.todoStyles}>
        <div style={this.todoTextStyles}>
          <h2>{this.props.title}</h2>
          <h4>{this.props.description}</h4>
        </div>
          <h3>{this.props.price}</h3>
        <img style={this.picStyle} src={this.props.imgUrl} alt='placeholder' />
        <button onClick={this.handleDelete} style={this.deleteStyle}>Delete</button>
        <button onClick={this.handleEdit} style={this.deleteStyle}>Edit</button>
      </div>
    )
  }
}


export default Todo;