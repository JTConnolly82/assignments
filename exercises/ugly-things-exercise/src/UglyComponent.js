import React from 'react';



const UglyComponent = (props) => {
  
  const uglyImage = {
    maxWidth: '300px',
    borderRadius: '69% 31% 51% 49% / 23% 69% 31% 77% ',
    border: '1px solid black'
  }

  const uglyDeleter = {
    marginTop: '10px',
    border: '1px solid black',
    padding: '6px',
    backgroundColor: '#cd30cd',
    borderRadius: '57% 43% 66% 34% / 34% 76% 24% 66%',
    fontFamily: 'inherit',
    fontSize: '1.5rem',
    cursor: 'crosshair'
  }

  

  const deletePasser = () => {
    props.handleDelete(props.uglyId);
    console.log(props.uglyId);
  }

  
  return (
    <div className='ugly-component'>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <img style={uglyImage} src={props.url} alt="ugly pic"/>
      <button onClick={deletePasser} style={uglyDeleter}>Delete</button>
    </div>
  )
}


export default UglyComponent;
 