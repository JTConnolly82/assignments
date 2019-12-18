import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {withUser} from '../context/UserProvider';


class apartmentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      bedrooms: '',
      bathrooms: '',
      submitted: false,
      submittedObj: ''
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
    let config = {
      headers: {'Authorization': "bearer " + this.props.token}
    }
    let submitObj = this.state;
    axios.post('/api/apartment', submitObj, config)
      .then((res)=> {
        this.setState({
          submitted: true,
          submittedObj: res.data
        })
      })
      .catch((err)=> {
        console.dir(err)
      })
  }

  // if (this.props.token) {
  //   return <Redirect to='/' />
  // }
  render() {
     if (this.state.submitted) {
    return <Redirect to={`/apartment/${this.state.submittedObj._id}`} />
  }
    return (
      // reviews apartments will post with reviews as empty array
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name='address' placeholder='address' />
        <input onChange={this.handleChange} name='bedrooms' placeholder='bedrooms' />
        <input onChange={this.handleChange} name='bathrooms' placeholder='bathrooms' />
        <button>Submit</button>
      </form>
    )
  }
}

export default withUser(apartmentForm);