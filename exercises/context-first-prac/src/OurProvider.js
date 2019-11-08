import React, {Component} from 'react';
const {Provider, Consumer} = React.createContext();

class OurProvider extends Component {
  constructor() {
    super();
    this.state = {
      title: 'i am a title',
      name: 'obi wan',
      on: false
    }
  }

  toggle = () => {
    this.setState(prev => {
      return {
        on: !prev.on
      }
    })
  }

  render() {
    return (
      <Provider value={{
          ...this.state,
          toggle: this.toggle
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default OurProvider;
