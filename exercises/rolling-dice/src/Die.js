import React from 'react'




class Die extends React.Component {
  constructor() {
    super();
    this.state = {
      dieStyle: {
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }
    }
  }
  

  handleClick = () => {
      this.setState({
        dieStyle: {
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backgroundColor: 'lightgrey'
        }
      })
  }

  render() {
    return (
      <div onClick={this.handleClick} style={this.state.dieStyle}>
        <h3>{this.props.number}</h3>
      </div>
    )
  }
}


export default Die;