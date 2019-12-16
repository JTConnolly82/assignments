import React from 'react';
import axios from 'axios';
import {withUser} from '../context/UserProvider';
import Review from './Review';


class AptDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      apt: {},
      title: '',
      description: '',
      wouldRecommend: '',
      reviews: [],
      recommendations: ''
    }
  }


  componentDidMount() {
    let {_id} = this.props.match.params
    axios.get(`/apartment/${_id}`).then(res => {
      console.log('found apt')
      console.log(res.data)
      this.setState({
        apt: res.data
      })
    }).then(
      axios.get(`/review/${_id}`).then(res => {
        console.log('review res')
        console.log(res.data)
        //get reviews where res.data.apt === this.props.match.params
        let filteredReviews = res.data.filter((review) => {
          return review.apt === this.props.match.params._id
        })
        this.setState({
          reviews: filteredReviews,
        })
      })
    )
    // trying to get % of reviewers who would recommend this location
    // let total = 0;
    // this.state.reviews.map((review) => {
    //   if (review.wouldRecommend === true) {
    //     total = total + 1
    //   }
    // })
    // this.setState({
    //   recommendations: total
    // })
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
    let reviewComponents = this.state.reviews.map((review) => {
      return <Review key={Math.random()*1000}
                     title={review.title} 
                     description={review.description} 
                     wouldRecommend={review.wouldRecommend}
                     />
    })
    return (
      <div>
        <h2>Address: {address}</h2>
        <h2>bathrooms: {bathrooms}</h2>
        <h2>bedrooms: {bedrooms}</h2>
        {this.props.token ? <form onSubmit={this.handleSubmit}>
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
        <div>
          {reviewComponents}
        </div>
      </div>
    )
  }
}

export default withUser(AptDetails);