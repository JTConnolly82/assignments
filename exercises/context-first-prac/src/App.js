import React from 'react';
import WithProvider from './WithProvider';
import './App.css';



const App = (props) => {
  return (
    <div className={props.on ? 'light' : 'dark'}>
      <h1>{props.title}</h1>
      <h3>Hello {props.name}</h3>
      <button onClick={props.toggle}>Change theme</button>
    </div>
  )
}


export default WithProvider(App);