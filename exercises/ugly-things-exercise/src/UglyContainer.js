import React from 'react';
import UglyForm from './UglyForm';
import UglyList from './UglyList';

class UglyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      title: '',
      description: '',
      uglyThings: []
    }
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    let newObj = {
      url: this.state.url,
      title: this.state.title,
      description: this.state.description
    }
    this.setState({
        uglyThings: [ newObj, ...this.state.uglyThings ],
        url: '',
        title: '',
        description: '',
      })
  }

  handleDelete = (id) => {
    // let newUglies = this.state.uglyThings.filter((uglyThing)=>{
    //   return uglyThing.id !== id
    // });
    // this.setState({
    //   uglyThings: [...newUglies]
    // })
    
    console.log('calling')
    console.log(id);
  }


  render() {
    return (
      <div className='ugly-container'>
        <h1 style={{fontSize: '3rem'}}>Ugly Things!</h1>
        <UglyForm uglyThings={this.state.uglyThings} 
                  handleChange={this.handleChange} 
                  handleSubmit={this.handleSubmit}
                  url={this.state.url}
                  title={this.state.title}
                  description={this.state.description}
                  />
        <UglyList handleDelete={this.handleDelete} theUglyThings={this.state.uglyThings} />
      </div>
    )
  }
}


export default UglyContainer;