import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Button, Forms, Navbar} from 'react-materialize';
import EntryShow from './components/Journal/EntryShow';
import DailyEntries from './components/Journal/DailyEntries';
import EntryForm from './components/Journal/EntryForm';
import HomePage from './components/HomePage';
import LogIn from './components/SignUp/LogIn';
import CreateAccount from './components/SignUp/CreateAccount';
import JournalContainer from './components/Journal/JournalContainer';
import NavBar from './components/NavBar';

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
  axios.post("/api/login",{username, password})
    .then((res) => {

      const newUser = {...this.state};

      if(res.data.user){
        newUser.username = res.data.username;
        newUser.password = res.data.password;
      }else{
        newUser.loginError = res.data
      }this.setState(newUser)
        
    console.log(res.data);
  
   })
  };
  
  render() {
    return (
      <div>
        <Navbar />
      <Router>
        <div>
        <Route exact path ="/" component={HomePage} />
        <Route exact path ="/login" component={LogIn} />
        <Route exact path = "/createaccount" component={CreateAccount} />
        <Route exact path="/dailyentries" component={DailyEntries} />
        <Route exact path = "/entryform" component={EntryForm} />
        <Route exact path = "/journal" component={JournalContainer} />
        <Route exact path = "/entry/:id" component={EntryShow} />
        </div>
      </Router>
      
      </div>
    );
  }
}

export default App;
