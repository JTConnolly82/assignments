import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

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
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;