import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';

const App = () => {

  

  const mainAppLayout = {
    display: 'grid',
    gridTemplateRows: 'auto auto',
  }

  return (
    <div className='app'>
      <div style={mainAppLayout}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;