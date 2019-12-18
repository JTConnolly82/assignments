import React from 'react';
import axios from 'axios';
import {withUser} from '../context/UserProvider';
import Review from './Review';
import './aptDetails.css';

class AptDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      apt: {},
      title: '',
      description: '',
      wouldRecommend: '',
      reviews: []
    }
  }


  componentDidMount() {
    let {_id} = this.props.match.params
    axios.get(`/apartment/${_id}`).then(res => {
      this.setState({
        apt: res.data
      })
    }).then(
      axios.get(`/review/${this.props.match.params._id}`).then(res => {
        let aptReviews = res.data
        this.setState({
          reviews: aptReviews
        })
      })
    )
  }

  

  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      headers: {'Authorization': "bearer " + this.props.token}
    }
    let reviewObj = {
      title: this.state.title,
      apt: this.state.apt._id,
      description: this.state.description,
      wouldRecommend: this.state.wouldRecommend,
    };
    console.log(reviewObj);
    axios.post('/api/review', reviewObj, config)
      .then((res)=> {
        console.log('posted')
      })
      .catch((err)=> {
        console.dir(err)
      })

  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }

  render() {
    
    let {address, _id, bathrooms, bedrooms} = this.state.apt;
    let recommendations = 0;
    let reviewComponents = this.state.reviews.map((review) => {
      review.wouldRecommend && recommendations++;
      console.log(recommendations)
      console.log(this.state.reviews.length)
      return <Review key={Math.random()*1000}
                     apt={review.apt}
                     title={review.title} 
                     description={review.description} 
                     wouldRecommend={review.wouldRecommend}
                     _id={review._id}
                     />
    })

    let percentageofRenters = (recommendations / this.state.reviews.length)*100;
    console.log(percentageofRenters)
    return (
      <div className='apt-details-wrapper'>
        <div>
          <div className='apt-details-main'>
            <h1>{address}</h1>
            <h2>{bathrooms}🛁</h2>
            <h2>{bedrooms}🛏</h2>
            {this.state.reviews.length > 0 ? <h2>{Math.round(percentageofRenters)}% of reviewers recommend this apartment</h2>: <div></div>}
          </div>
          {this.props.token ? <form className='apt-details-form' onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name='title' value={this.state.title} placeholder='review title'/>
          <input onChange={this.handleChange} name='description' value={this.state.description} placeholder='review description'/>
          Would you recommend this apt?
          Yes<input onChange={this.handleChange} name='wouldRecommend' type='radio' value='true' />
          No<input onChange={this.handleChange} name='wouldRecommend' type='radio' value='false' />
          <button>Post</button>
        </form>
        :
        <h3>Login to post a review</h3>
        }
        </div>
        <div className='details-review-wrapper'>
          {this.state.reviews.length > 0 ? {reviewComponents} : <h2>Be the first to leave a review! </h2>}
        </div>
      </div>
    )
  }
}

export default withUser(AptDetails);