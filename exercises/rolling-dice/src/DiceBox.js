import React from 'react';
import Die from './Die';


class DiceBox extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [0, 0, 0, 0, 0],
      selected: [false, false, false, false, false]
    }
  }


  handleClick = () => {
    let newNums = [];
    for (let i = 0; i < this.state.numbers.length; i++) {
      newNums.push(Math.floor(Math.random() * 6))
    }
    this.setState({
        numbers: newNums
    })
  }

  wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  dBoxStyles = {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 100px)'
  }

  btnStyle = {
    marginTop: '60px',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '8px',
    fontSize: '15px',
    cursor: 'pointer'
  }

  render() {

    let diceComponents = this.state.numbers.map((num)=>{
      return <Die key={Math.random()*100} number={num}/>
    })

    return (
      <div style={this.wrapperStyles}>
        <div style={this.dBoxStyles}>
          {diceComponents}
        </div>
        <button style={this.btnStyle} onClick={this.handleClick}>Roll!</button>
      </div>
    )
  }


}


export default DiceBox;