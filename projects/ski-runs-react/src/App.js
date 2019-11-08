import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: []
    }
  }

  componentDidMount() {
    axios.get('https://mtnpowder.com/feed?resortId=5').then((res)=>{
      this.setState({
        info: res.data
      })
    });
  }
 
  

  render() {
    console.log(this.state.info)
    return (
      <div>
        <h1>{this.state.info.Name}</h1>
      </div>
    )
  }
}


export default App;