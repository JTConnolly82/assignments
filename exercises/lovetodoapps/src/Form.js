import React from 'react';





class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      price: '',
      imgUrl: ''
  }
  }


  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      title: '',
      description: '',
      price: '',
      imgUrl: ''
    })
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name='title' placeholder='title' />
        <input onChange={this.handleChange} name='description' placeholder='desc.'/>
        <input onChange={this.handleChange} name='price' placeholder='price' />
        <input onChange={this.handleChange} name='imgUrl' placeholder='img url' />
        <button>Submit</button>
      </form>
    )
  }

}


export default Form;
