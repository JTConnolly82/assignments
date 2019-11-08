import React from 'react';
const {Provider, Consumer} = React.createContext();





const WithProvider = (Component) => {
  return (props) => <Consumer>
                      {value => <Component {...value}{...props} /> }
                    </Consumer>
}


export default WithProvider;