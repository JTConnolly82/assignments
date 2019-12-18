import React from 'react';
import axios from 'axios';
const UserContext = React.createContext();



const userAxios = axios.create();
// axios interceptor
userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization =  `Bearer ${token}`;
  return config
})


class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || "",
      reviews: []
    }
  }


  signup = (credentials) => {
    axios.post("/auth/signup", credentials)
      .then((res) => {
        console.log(res)
        const { user, token } = res.data;
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({user: user, token: token})
        // if (this.state.user) {
        //   return <Redirect to='/' />
        // }
      })
      .catch((err) => console.log(err));
  };

  login = (credentials) => {
    axios.post("/auth/login", credentials)
    .then((res) => {
      console.log(res)
      const { user, token } = res.data;
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({user: user, token: token})
      // if (this.state.user) {
      //   return <Redirect to='/' />
      // }
    })
    .catch((err) => console.log(err));
  }

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: {},
      token: ""
    })
  }

  getUserReviews = () => {

  }

  addReview = (newReview) => {
    userAxios.post("/api/review", newReview)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          getUserReviews: this.getUserReviews,
          addReview: this.addReview
        }}>
        { this.props.children }
      </UserContext.Provider>
    )
  }


}

export default UserProvider;


export const withUser = (C) => (props) => (
  <UserContext.Consumer>
    { value => <C {...value} {...props} /> }
  </UserContext.Consumer>
)

