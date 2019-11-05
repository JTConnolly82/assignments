import React from 'react';





class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      imgUrl: ''
    }
  }

  formStyle = {
    marginTop: '30px',
    marginBottom: '30px',
    display: 'flex',
  }

  inputStyles = {
    display: "grid",
    gridTemplateColumns: '130px 130px 130px 100px',
    gap: '4px',
  }

  submitBtnStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: '',
    cursor: 'pointer'
  }


  handleChange = (e) => {
    let {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    // clear form
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit} style={this.formStyle}>
        <div style={this.inputStyles}>
        <input onChange={this.handleChange} name='title' placeholder='title' required />
        <input onChange={this.handleChange} name='description' placeholder='description' required /> 
        <input onChange={this.handleChange} name='imgUrl' placeholder='image url' required />
        <button style={this.submitBtnStyle}>Submit</button>
        </div>
      </form> 
    )
  }



}


export default Form;
