import React from 'react';
import DeejContainer from './DeejContainer';


const App = () => {

  let appStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <div style={appStyles}>
      <DeejContainer />
    </div>
  )
}


export default App;
