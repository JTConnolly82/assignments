import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      people: []
    }
  }

  handleChange = (e) => {
    let formName = (e.target.value);
    this.setState({
      name: formName,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
        let {name} = this.state;

        const newPerson = {
            name
        }

        this.setState(prevState => {
            return {
                people: [...prevState.people, newPerson]
            }
        })
  }


  render() {
    let mappedPeeps = this.state.people.map((person)=>{
      return <h1>{person.name}</h1>
    })
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input name='nameInput' onChange={this.handleChange} placeholder={'name here '} />
        <button>submit!</button>
      </form>
      <div>
        {mappedPeeps}
      </div>
      </div>
    )
  }
}

export default Form;
