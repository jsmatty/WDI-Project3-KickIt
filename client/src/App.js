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
import UserShow from './components/User/UserShow';
import EditUserPage from './components/User/EditUserPage';


class App extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false,
            users: [],
            user:[]
            
        }
    }

  render() {
    return (
      <div>
        <NavBar />
      <Router>
        <div>
        <Route exact path ="/" component={HomePage} />
        <Route exact path ="/login" component={LogIn} />
        <Route exact path = "/createaccount" component={CreateAccount} />
        <Route exact path="/dailyentries" component={DailyEntries}  />
        <Route exact path = "/entryform" component={EntryForm} />
        <Route exact path = "/journal" component={JournalContainer} />
        <Route exact path = "/entry/:id" component={EntryShow} />
        <Route exact path = '/user/:userId/edit' component={EditUserPage} />
        <Route exact path = "/user/:userId" component={UserShow}  />
        </div>
      </Router>
      
      </div>
    );
  }
}

export default App;
