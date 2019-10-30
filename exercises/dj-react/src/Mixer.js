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
      marginLeft: '15px'
    }

    const mappedSquares = this.state.colors.map((color)=>{
      return <Square color={color}/>
    });


    const handleClick = () => {
      this.setState((prevState)=>{
        if (prevState.colors[0] === 'white') {
          return {colors: ["black", "black", "black", "black"]}
        } else {
          return {colors: ["white", "white", "white", "white"]}
        }
      })
    }


    return (
      <div style={mixerContainerStyles}>
        <div style={mixerStyles}>
          {mappedSquares}
        </div>
        <button onClick={handleClick} style={buttonStyle}>white/black</button>
      </div>
    )
  }
}


export default Mixer;