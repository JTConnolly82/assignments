import React from 'react';




const Badge = (props) => {
  return (
    <div className='badge'>
      <span className='hellolabel'>
        Badge:
      </span>
      <div className='badgeinputs'>
        <h3 className='input'>Name: {props.firstName} {props.lastName}</h3>
        <h3 className='input'>Email: {props.email}</h3>
        <h3 className='input'>Phone: {props.phone}</h3>
        <h3 className='input'>Born: {props.birthPlace}</h3>
        <h3 className='input'>Likes to Eat: {props.favFood}</h3>
      </div>
      <h5>About {props.firstName}</h5>
      <h4 className='aboutsection'>{props.about}</h4>
    </div>
  )
}



export default Badge;
