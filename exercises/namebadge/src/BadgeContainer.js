import React from 'react';
import Badge from './Badge';
import './styles.css';

class BadgeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthPlace: '',
        favFood: '',
        about: '',
        badges: []
    }
  }

  handleChange = (e) => {
    let {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newBadge = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      birthPlace: this.state.birthPlace,
      favFood: this.state.favFood,
      about: this.state.about
    };
    let newBadges = [...this.state.badges];
      newBadges.push(newBadge);
    this.setState({
      badges: newBadges
    });
    e.target.reset();
  }

  render() {

    let badgeComponents = this.state.badges.map((badge)=>{
      return <Badge key={Math.random()*100} 
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    email={badge.email}
                    phone={badge.phone}
                    birthPlace={badge.birthPlace}
                    favFood={badge.favFood}
                    about={badge.about} 
             />
    })

    return (
      <div className='appContainer'>
        <form className='theForm' onSubmit={this.handleSubmit}>
          <div className='oneLineInputContainer'>
            <input className='oneLineInput' type="text" placeholder='first name' name='firstName' onChange={this.handleChange} required/>
            <input className='oneLineInput' type="text" placeholder='last name' name='lastName' onChange={this.handleChange} required/>
            <input className='oneLineInput' type="email" placeholder='email' name='email' onChange={this.handleChange} required/>
            <input className='oneLineInput' type="text" placeholder='phone' name='phone' onChange={this.handleChange} required/>
            <input className='oneLineInput' type="text" placeholder='place of birth' name='birthPlace' onChange={this.handleChange} required/>
            <input className='oneLineInput' type="text" placeholder='fav food' name='favFood' onChange={this.handleChange} required/>
          </div>
          <textarea  className='theTextArea' placeholder='tell about yourself' name='about' onChange={this.handleChange} maxLength = "150" required />
          <button className='submitbutton'>Submit!</button>
        </form>
        {badgeComponents}
      </div>
    )
  }

}

export default BadgeContainer;
