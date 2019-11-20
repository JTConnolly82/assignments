import React from 'react';
import './styles.css';


class UglyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      title: '',
      description: '',
    }
  }

  handleInitialSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state)
  }
  



  render() {
    return (
      <form className='ugly-form' onSubmit={this.handleInitialSubmit} name='uglyForm'>
        <div className="form-input-div">
        Title: <input onChange={this.props.handleChange} placeholder='title' name='title' value={this.props.title} />
        </div>
        <div className="form-input-div">
        Desc: <input onChange={this.props.handleChange} placeholder='description' name='description' value={this.props.description} />
        </div>
        <div className="form-input-div">
        Image: <input onChange={this.props.handleChange} placeholder='img url' name='url' value={this.props.url} />
        </div>
        <button id='submit-button-uglyform'>Add</button>
      </form>
    )
  }
}


export default UglyForm;