import React, {Component} from 'react';
import Square from './Square';


class Mixer extends Component {
  constructor() {
    super();
    this.state = {
      colors: ['white', 'white', 'white', 'white']
    }
  }


  render() {

    const mixerStyles = {
      display: 'grid',
      gridTemplateColumns: '400px 400px',
      gridTemplateRows: '400px 400px'
    }

    const mixerContainerStyles = {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
    }

    const buttonStyle = {
      marginLeft: '15px',
      marginBottom: '8px'
    }
 
    


    const mappedSquares = this.state.colors.map((color)=>{
      return <Square color={color}/>
    });


    const handleBlackAndWhite = () => {
      this.setState((prevState)=>{
        if (prevState.colors[0] === 'white') {
          return {colors: ["black", "black", "black", "black"]}
        } else {
          return {colors: ["white", "white", "white", "white"]}
        }
      })
    }
    const buttonDivStyles = {
      display: "flex",
      flexDirection: "column"

    }

    const handlePurpleTop = () => {
      this.setState((state)=>{
        state.colors[0] = 'purple';
        state.colors[1] = 'purple';
        return state.colors;
      })
    }


    const handleBottomRight = () => {
      this.setState((state)=> {
        state.colors[3] = 'blue';
        return state.colors;
      })
    }

    const handleBottomLeft = () => {
      this.setState((state)=> {
        state.colors[2] = 'blue';
        return state.colors;
      })
    }

    return (
      <div style={mixerContainerStyles}>
        <div style={mixerStyles}>
          {mappedSquares}
        </div>
          <div style={buttonDivStyles}>
          <button onClick={handlePurpleTop} style={buttonStyle}>purple top</button>
          <button onClick={handleBlackAndWhite} style={buttonStyle}>white/black</button>
          <button onClick={handleBottomRight} style={buttonStyle}>blue right</button>
          <button onClick={handleBottomLeft} style={buttonStyle}>blue left</button>
        </div>
      </div>
    )
  }
}


export default Mixer;