import React from 'react';
import axios from 'axios';
import './review.css'
import {withUser} from '../context/UserProvider'


class Review extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      wouldRecommend: '',
      editing: false
    }
  }
  // title={review.title} 
  // description={review.description} 
  // wouldRecommend={review.wouldRecommend}

  componentDidMount() {
    console.log(this.props)
    let propsObj = {

    }
  }

  handleDelete = () => {
    let config = {
      headers: {"Authorization": "bearer " + this.props.token}
    }
    axios.delete(`/api/review/${this.props.apt}`, {_id: this.props._id}, config)
    .then((res)=> {
      console.log(res);
      console.log('deleted')
    })
    .catch((err)=> {
      console.dir(err)
    })
  }

  handleEditToggle = () => {
    this.setState({
      editing: true
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }


  handleEditSubmit = () => {
    let config = {
      headers: {'Authorization': "bearer " + this.props.token}
    }
    let editObject = {
      newObj: {
        title: this.state.title,
        description: this.state.description,
        wouldRecommend: this.state.wouldRecommend
      },
      _id: this.props._id
    }
    axios.put('/api/review/' + this.props.apt, editObject, config)
      .then((res)=> {
        //set the state to update on the screen live
        console.log(res.data)
        console.log('edited')
      })
      .catch((err)=> {
        console.dir(err)
      })
    console.log(editObject)
    this.setState({
      title: '',
      description: '',
      wouldRecommend: '',
      editing: false
    })
  }

  render() {
    return (
     <> { this.state.editing ? 
      
      <div className='review-container'>
        <form>
          <input onChange={this.handleChange} name='title' placeholder={this.props.title}/>
          <input onChange={this.handleChange} name='description' placeholder={this.props.description}/>
          false<input onChange={this.handleChange} name='wouldRecommend' value='false' type='radio' />
          true<input onChange={this.handleChange} name='wouldRecommend' value='true' type='radio' />
          {/* <button onClick={this.handleCancelEdit}>CancelEdit</button> */}
          <button onClick={this.handleEditSubmit}>Submit</button>
          <button onClick={()=>{this.setState({editing: false})}}>Cancel</button>
        </form>
      </div>
      // ternary semi
      : <div className='review-container'>
          <div className='review-info'>
            <h2>{this.props.title}</h2>
            <h3>{this.props.description}</h3>
            <h3>{ this.props.wouldRecommend ? '👍' : '👎' }</h3>
          </div>
          <div className='review-buttons'>
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEditToggle}>Edit</button>
          </div>
        </div> 
      }</>
    )
  }



}


export default withUser(Review);