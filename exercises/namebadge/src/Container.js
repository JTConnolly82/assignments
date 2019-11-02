import React, { Component } from 'react'
import Badges from './Badges';



class Container extends Component {
  constructor() {
    super();
    this.state = {
      // hold badges here in [], pass down as props to badges
      // handlesubmit will push badge object into badges array in state 
    }
  }

  handleSubmit = () => {

  }


  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input placeholder='name' />
          <input placeholder='phone' />
          <input placeholder='place of birth' />
          <input placeholder='favorite food' />
          <input placeholder='email' />
          <input placeholder='about you' />
          <button>Create Badge</button>
        </form>

        <Badges />

      </div>
    )
  }
}


export default Container;
