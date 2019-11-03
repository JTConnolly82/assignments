import React, {Component} from 'react';
import Square from './Square';



class DeejContainer extends Component {
  constructor() {
    super();
    this.state = {
      colors: ["red", "blue", "green", "purple"],
      turnWhite: true,
    }
  }

  containerStyles = {
    display: 'grid',
    gridTemplateColumns: '200px 200px',
    gridTemplateRows: '200px 200px',
   
  }

  tainerButtonContainer = {
    display: 'flex',
    flexDirection: 'column'
  }

  buttonStyle = {
    width: '30%',
    alignSelf: "center",
    marginTop: '15px',
    border: '3px solid black',
    padding: '8px',
    borderRadius: '7px',
    backgroundColor: 'white',
    fontSize: '16px',
    cursor: 'pointer'
  }

  handleBlackWhite = (e) => {
      if (this.state.turnWhite) {
        this.setState(
          {colors: ['white', 'white', 'white', 'white']}
        ) 
      } else {
        this.setState(
          {colors: ['black', 'black', 'black', 'black']}
        )
      }
      this.setState({
        turnWhite: !this.state.turnWhite
      })
  }

  handlePurpleTop = () => {
    this.setState((prev)=>{
      prev.colors[0] = 'purple';
      prev.colors[1] = 'purple';
      return prev;
    })
  }

  handleBottomLeft = () => {
    this.setState((prev)=>{
      prev.colors[2] = 'blue';
      return prev;
    })
  }

  handleBottomRight = () => {
    this.setState((prev)=>{
      prev.colors[3] = 'blue';
      return prev;
    })
  }


  render() {

    let squareComponents = this.state.colors.map((color)=>{
      return <Square key={Math.random() * 1000} color={color} />
    });

    return (
      <div style={this.tainerButtonContainer}>
        <div style={this.containerStyles}>
          {squareComponents}
        </div>
        <button onClick={this.handleBlackWhite} style={this.buttonStyle}>Black/White</button>
        <button onClick={this.handlePurpleTop} style={this.buttonStyle}>Purple Top</button>
        <button onClick={this.handleBottomLeft} style={this.buttonStyle}>Bottom Left</button>
        <button onClick={this.handleBottomRight} style={this.buttonStyle}>Bottom Right</button>
      </div>
    )
  }



}


export default DeejContainer;



