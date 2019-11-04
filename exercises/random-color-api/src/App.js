import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: ''
    }
  }

  

  componentDidMount(){
    axios.get('http://www.colr.org/json/color/random ').then((res)=>{
    console.log(res.data.new_color);
    this.setState({
      color: res.data.new_color
    })
  })
  }

  handleClick = () => {
    axios.get('http://www.colr.org/json/color/random ').then((res)=>{
      console.log(res.data.new_color);
      this.setState({
        color: res.data.new_color
      })
    })
  }


  render() {

    let divStyles = {
      display: 'flex',
      height: '400px',
      width: '400px',
      backgroundColor: `#${this.state.color}`
    }

    return (
      <div>
        RANDOM COLORS !!!!!!
        <div style={divStyles}></div>
        <button onClick={this.handleClick}>Click for More!!!</button>
      </div>
      )
  }
}


export default App;
