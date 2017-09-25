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
import UserShow from './components/User/UserShow'


class App extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false,
            users: [],
            user:[]
            
        }
    }

componentWillMount(){
  axios.get('/api/users').then((res)=>{
    // console.log(res.data);
    this.setState({users: res.data})
    console.log('App.js ' + this.state.users)
  })
}

_updateUsers = (data) => {

  this.setState({users: data})
}


_logIn = () => {

    this.setState({
      loggedIn: true
      
    })
}

_logOut = () => {
  
  this.setState({loggedIn: false});
    
}

_setLoggedInUser = (user) => {

  this.setState({
    user: user
  })
}

_logInAndPassNewUser = (user) => {

  this.setState({
    loggedIn:true,
    user: user
  })
  
}
  render() {
    return (
      <div>
        <NavBar users={this.state.user}
            loggedIn={this.state.loggedIn}/>
      <Router>
        <div>
        <Route exact path ="/"  render={routeProps => 
          <HomePage {...routeProps}
            users={this.state.users}
            loggedIn={this.state.loggedIn}
            updateUsers={this._updateUsers}
          />}/>

        <Route exact path ="/login"  render={routeProps => 
          <LogIn {...routeProps}
            users={this.state.user}
            loggedIn={this.state.loggedIn}
            _updateUsers={this._updateUsers}
            />} />
           
        <Route exact path = "/createaccount" component={CreateAccount} />

        <Route exact path="/dailyentries"  render={routeProps => 
          <DailyEntries {...routeProps}
            login={this._logInAndPassNewUser}
          
          />} />

        <Route exact path = "/entryform" component={EntryForm} />

        <Route exact path = "/journal" component={JournalContainer} />

        <Route exact path = "/entry/:id" component={EntryShow} />

        <Route exact path = "/user/:userId"  render={routeProps =>
          <UserShow {...routeProps}
          users={this.state.user}
          updateUsers={this.state._updateUsers}
          logOut={this._logOut}
          />} />
        </div>
      </Router>
      
      </div>
    );
  }
}

export default App;
