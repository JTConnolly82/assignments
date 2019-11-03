import React, {Component} from 'react';



class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }


  squareStyles = {
    backgroundColor: this.props.color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  handleButton = () => {
    this.setState((prev)=>{
      prev.counter = prev.counter + 1
      return prev;
    })
  }

render() {
  return (
    <div style={this.squareStyles}>
      <button onClick={this.handleButton}>Click!</button>
      {this.state.counter > 0 && <h4>i was clicked {this.state.counter} times</h4>}
    </div>
  )
}
}


export default Square;