import React from 'react';


class Review extends React.Component {

  constructor() {
    super();

  }
  // title={review.title} 
  // description={review.description} 
  // wouldRecommend={review.wouldRecommend}

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.description}</h3>
        <h3>{this.props.wouldRecommend}</h3>
      </div>
    )
  }



}


export default Review;