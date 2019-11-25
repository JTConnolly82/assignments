import React, {useState} from 'react';



 // firstName: 'Lando',
  //   lastName: 'Calrissian',
  //   alive: 'true',
  //   amount: '5000',
  //   type: 'jedi',
  //   _id: '1'


class Jedi extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      firstName: '',
      lastName: '',
      amount: '',
      affiliation: '',
      status: '',
    }
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  passDelete = () => {
    this.props.handleDelete(this.props._id);
  }

  passUpdate = (e) => {
    e.preventDefault();
    let newJediObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      amount: this.state.amount,
    }
    this.props.handleUpdate(this.props._id, newJediObj);
    this.setState({
      editing: false,
      firstName: '',
      lastName: '',
      amount: '',
    })
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleStatusSelect = (value) => {
    this.setState({
      status: value
    })
  }

  handleAffliationSelect = (value) => {
    this.setState({
      affiliation: value
    })
  }

  render() {

    let statusOptions = [
      {value: 'dead', label: 'Dead'},
      {value: 'alive', label: 'Alive'}
    ]

    let affiliationOptions = [
      {value: 'sith', label: 'Sith'},
      {value: 'jedi', label: 'Jedi'}
    ]

  return (
    <div>
      {this.state.editing === false ?
      <>
        <h2>{this.props.firstName} {this.props.lastName}</h2>
        <h3>{this.props.alive === 'true' ? 'alive' : 'dead'}</h3>
        <h3>Bounty Amount: {this.props.amount}</h3>
        <h4>{this.props.type === 'jedi' ? 'jedi' : 'sith' }</h4>
        <button onClick={this.passDelete}>Delete</button>
        <button onClick={this.toggleEdit}>Edit</button>
      </>
      : 
      <form onSubmit={this.passUpdate}>
        <input placeholder={this.props.firstName} name='firstName' value={this.state.firstName} onChange={this.handleChange} />
        <input placeholder={this.props.lastName} name='lastName' value={this.state.lastName} onChange={this.handleChange} />
        <input placeholder={this.props.amount} name='amount' value={this.state.amount} onChange={this.handleChange} />
        <select value={this.state.status} name='status' options={statusOptions} onChange={this.handleStatusSelect} />
        <select value={this.state.affiliation} name='affiliation' options={affiliationOptions} onChange={this.handleAffliationSelect} />
        <button>Update</button>
      </form>
      }
    </div>
    )
  }
}



export default Jedi;