import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import {Button, Forms} from 'react-materialize';




class LogIn extends Component {
_handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);

    const username = event.target.username.value;
    const password = event.target.password.value;
     

}

    render() {
        return (
            <div>
                <h1>Log In:</h1>
                <form onSubmit={this._handleLogin}>
                    <div>
                        <label htmlFor="username"></label>
                        <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="text" name="password" placeholder="Password"/>
                    </div>
                    <div>
                        
        <Link to="/journal"><button>Submit</button></Link>
                    </div>
                </form>
                {/*<p>Ready to join our Community?<Link style={Link} to="/create-account">Sign Up Here!</Link></p>*/}
            </div>
        );
    }
}


export default LogIn;
