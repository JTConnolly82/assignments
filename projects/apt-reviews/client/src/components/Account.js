import React from 'react';
import axios from 'axios';
import Review from './Review';


class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      userReviews: [],
      user: ''
    }
  }

  // let {_id} = this.props.match.params
  //   axios.get(`/apartment/${_id}`).then(res => {
  //     console.log('found apt')
  //     console.log(res.data)
  //     this.setState({
  //       apt: res.data
  //     })
  //   })

  componentDidMount() {
    let theUser = this.props.user._id;
    axios.get(`/user/${theUser}`).then(res => {
      let {name} = res.data[0]
      this.setState({
        user: name
      })
    })
  axios.get('/review/user', {user: theUser}).then((res) => {
      let theReviews = res.data.filter(review => {
        return review.user === this.props.user._id
      })
      this.setState({
        userReviews: theReviews
      })
    })
  }
  render() {

    let mappedReviews = this.state.userReviews.map(review => {
      return <Review key={Math.random()*1000}
                     title={review.title} 
                     description={review.description} 
                     wouldRecommend={review.wouldRecommend}
                    />
    })

    return (
      <div>
        <h1>User: {this.state.user}</h1>
        <h2>Info:</h2>

        <h2>My reviews:</h2>
        {mappedReviews}
      </div>
    )
  }
  
}


export default Account;

