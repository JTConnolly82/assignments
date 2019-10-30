import React from 'react';



const Hero = (props) => {

  let {imgUrl, name, show, catchPhrase} = props;
  
  const handleClick = () => {
    alert(catchPhrase);
  }

  return (
    <div onClick={handleClick}>
      <img src={imgUrl} alt="heropic"/>
      <h2>{name}</h2>
      <h4>{show}</h4>
      <h5>{catchPhrase}</h5>
    </div>
  )
}

export default Hero;