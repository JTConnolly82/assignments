import React from 'react';
import axios from 'axios';
import Jedi from './Jedi';
import JediForm from './JediForm';

import './styles.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jedis: [],
    };
  }

  componentDidMount() {
    axios.get('/jedi').then((res) => {
      let theJedis = res.data;
      this.setState({
        jedis: theJedis
      });
    });
  };

 

  handleSubmit = (jediObj) => {
    axios.post('/jedi', jediObj).then((res) => {
      this.setState({
        jedis: res.data
      });
    });
  };

  handleDelete = (jediId) => {
    console.log(jediId);
    axios.delete('/jedi/' + jediId).then((res)=>{
    console.log(res);
    let newJedis = this.state.jedis.filter((jedi) => jedi._id !== jediId)
    this.setState({
        jedis: newJedis
      })
    });
  }

  handleUpdate = (jediId, updatedJedi) => {
    console.log(jediId);
    axios.put('/jedi/' + jediId, updatedJedi).then((res) => {
      this.setState({
        jedis: res.data
      })
    })
    console.log(this.state.jedis)
  }


  titleImg = {
    width: '100px',
    height: '100px',
    padding: '9px'
  }

  titleDiv = {
    display: 'flex', 
    justifyContent: 'space-around',
    marginBottom: '30px',
    marginTop: '30px',
    alignItems: 'center'
  }


  render() {

    let mappedJedis = this.state.jedis.map((jedi) => {
      return <Jedi handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} key={Math.random()*999} {...jedi}/>
    });

    return (
      <div className='app-wrapper'>
        <div style={this.titleDiv}>
          <img style={this.titleImg} src="data:image/jpeg;base64,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" alt=""/>
            <h1>Bounty Hunters</h1>
          <img style={this.titleImg} src="data:image/jpeg;base64,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" alt=""/>
        </div>
        <JediForm handleSubmit={this.handleSubmit} />
        {mappedJedis}
      </div>
    )
  }
}


export default App;