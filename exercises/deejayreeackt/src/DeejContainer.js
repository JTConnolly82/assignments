import React, {Component} from 'react';
import Square from './Square';



class DeejContainer extends Component {
  constructor() {
    super();
    this.state = {
      colors: ["white", "white", "white", "white"]
    }
  }

  containerStyles = {
    display: 'grid',
    gridTemplateColumns: '400px 400px',
    gridTemplateRows: '400px 400px'
  }

  render() {

    let squareComponents = this.state.colors.map((color)=>{
      return <Square key={Math.random() * 1000} color={color} />
    });

    return (
      <div style={this.containerStyles}>
        {squareComponents}
      </div>
    )
  }



}


export default DeejContainer;



