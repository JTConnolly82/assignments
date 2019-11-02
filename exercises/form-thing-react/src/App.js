import React from 'react';
import './App.css';
import Options from "./Options"
import Greeting from "./Greeting"
import AddGreeting from "./AddGreeting"

function App() {
  return (
    <div>
      <Options />
      <Greeting />
      <AddGreeting />
    </div>
  );
}

export default App;
