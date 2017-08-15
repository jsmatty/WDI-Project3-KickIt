import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import JournalContainer from './components/Journal/JournalContainer';
import HomePage from './components/HomePage';
import LogIn from './components/SignUp/LogIn';
import CreateAccount from './components/SignUp/CreateAccount';

class App extends Component {
  constructor() {
  super()
  this.state = {
    login: false
    //var login or not. get info from user (username), login make API call. 
    //default for login
   }
}

  _handleLogin= function(username, password) {
  axios.post("/api/login", this.{user.username}.password).then((res) => {
    console.log(res.data);
  
   })
  };
  
  render() {
    return (
      <Router>
        <div>
        <Route exact path ="/" component={HomePage} />
        <Route exact path ="/login" component={LogIn} />
        <Route exact path = "/createaccount" component={CreateAccount} />
        <Route exact path="/journal" component={JournalContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
