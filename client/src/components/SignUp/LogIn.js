import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import {Button, Forms} from 'react-materialize';





class LogIn extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
            currentUser: [],
            username: '',
            password: '',
            redirect: false
        }

    }

    componentWillMount(){
        axios.get(`/api/users`).then((res) => {
            this.setState({
                users: res.data
            })
            console.log(this.state.users);
            console.log(this.state.users.length)
        })
    }

    handleChange(event){
  // set variables for our elements, their name attributes, and their values
  console.log (event.target.value);
  const attributeName = event.target.name;
  const  attributeValue = event.target.value;
  const newState = {...this.state}
  newState[attributeName] = attributeValue;
// Set the state with our newState object
    this.setState(newState);
}

_handleLogin = (event) => {
    event.preventDefault();
    let currentUser = []

    console.log('Login function')
    for(let i=0; i <= this.state.users.length; i++ ){
        const usersArray = this.state.users[i];
        if(usersArray.username === this.state.username && this.state.users[i].password === this.state.password){
            currentUser.push(usersArray);
            alert('Logged In')
            break
        }
    }
    this.setState({
                 currentUser: currentUser,
                 redirect: true
                })
}

    render() {
   
if(this.state.redirect){
      console.log(this.state.redirect)
    return <Redirect to={`/user/${this.state.currentUser[0]._id}`} />
  }        return (
            <div>
           
                <h1>Log In:</h1>
                <form onSubmit={this._handleLogin}>
                    <div>
                        <label htmlFor="username"></label>
                        <input type="text" name ="username" value={this.state.username} 
            onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <div>
                        <input type="submit" value='Login'/>
        {/*<Link to="/journal"><button>Submit</button></Link>*/}
        <Link to="/createaccount"><button>Create Account</button></Link>
                    </div>
                </form>
                {/*<p>Ready to join our Community?<Link style={Link} to="/create-account">Sign Up Here!</Link></p>*/}
            </div>
        );
    }
}


export default LogIn;
