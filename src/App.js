import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Dashboard from './Components/Dashboard.js';
import LearnMore from './Components/LearnMore.js';
import UserSignUp from './Components/UserSignUp.js';
import NewPost from './Components/NewPost.js';
import MyAccount from './Components/MyAccount.js';
import './_styles/App.css';

class App extends Component{
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <Route
          exact
          path="/user-signup"
          component={UserSignUp}
        />
        <Route
          exact
          path="/new-post"
          component={NewPost}
        />
        <Route
          exact
          path="/my-account"
          component={MyAccount}
        />
        <Route
          exact
          path="/learn-more"
          component={LearnMore}
        />
      </div>
    );
  }
}

export default App;
