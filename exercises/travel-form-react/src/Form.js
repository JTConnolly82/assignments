import React, { Component } from 'react';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      location: '',
      diet: []
    }
  }

  handleChange = (e) => {
    let {value, name} = e.target;
    if (name === 'diet') {
      const prevArr = [...this.state.diet]
      if (prevArr.includes(value)) {
        prevArr.splice(prevArr.indexOf(value), 1)
      } else {
        prevArr.push(value)
      }
      this.setState({diet: prevArr})
    }
    else {
      this.setState({[name]: value})
    }
  }

  render() {
    return(
      <form>
        <input onChange={this.handleChange} name='firstName' value={this.state["name"]} placeholder='first name' />
        <input onChange={this.handleChange} name='lastName' value={this.state["name"]} placeholder='last name' />
        <input onChange={this.handleChange} name='age' value={this.state["name"]} placeholder='age' />
        <br />
        Male<input type='radio' name='gender' value='male' onChange={this.handleChange} />
        Female<input type='radio' name='gender' value='female' onChange={this.handleChange} />
        Other<input type='radio' name='gender' value='other' onChange={this.handleChange} />
        <select name='location' onChange={this.handleChange}>
          <option value="">Locations</option>
          <option value="australia">Aus</option>
          <option value="new zealand">NZ</option>
          <option value="pittsburgh">Pgh</option>
        </select>
        <br />
       Vegan<input type='checkbox' value='vegan' name='diet' onChange={this.handleChange} />
       Veggies<input type='checkbox' value='vegetarian' name='diet' onChange={this.handleChange} />
        I will eat anything!<input type='checkbox' value='eats everything' name='diet' onChange={this.handleChange} />
      </form>
    )
  }
}

export default Form;
