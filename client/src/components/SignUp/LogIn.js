import React, { Component } from 'react';
//import {Link} from 'react-router-dom';





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
                        <button>Submit</button>
                    </div>
                </form>
                {/*<p>Ready to join our Community?<Link style={Link} to="/create-account">Sign Up Here!</Link></p>*/}
            </div>
        );
    }
}

export default LogIn;