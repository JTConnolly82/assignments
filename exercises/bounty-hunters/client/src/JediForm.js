import React from 'react';
import './styles.css';

class JediForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      status: '',
      amount: '',
      affiliation: ''
    }
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  passSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit()
  }

  render() {
    return (
      <form className='main-form' onSubmit={this.passSubmit}>
        <input placeholder='first name' name='firstName' onChange={this.handleChange}/>
        <input placeholder='last name' name='lastName' onChange={this.handleChange} />
        <div>
          <h4>Status</h4>
         Alive<input type='radio' name='status' value='alive' onChange={this.handleChange} /> Dead<input type='radio' name='status' value='dead' onChange={this.handleChange} />
        </div>
        <input placeholder='bounty amount' name='amount' onChange={this.handleChange} />
        <div>
          <h4>Affiliation</h4>
          Jedi<input type='radio' name='affiliation' value='jedi' onChange={this.handleChange} />
          Sith<input type='radio' name='affiliation' value='sith' onChange={this.handleChange} />
        </div>
        <button>Add</button>
      </form>
    )
  }

}

export default JediForm;
