import React, { Component } from 'react';
import axios from 'axios';
import


class UserInformation extends Component {
    render() {
        return (
            <div style={formDataStyle}>
                <h3>Let's get to know you a little better!</h3>
                <form>
                <h5>Enter your information here!</h5>
                    <div>
                        <label htmlFor="first-name"></label>
                        <input style={fieldStyle} type="text" placeholder="First Name"/>
                        <label htmlFor="email"></label>
                        <input style={fieldStyle} type="text" placeholder="Johndoe@gmail.com"/>
                        <label htmlFor="username"></label>
                        <input style={fieldStyle} type="text" placeholder="UserName"/>
                        <label htmlFor="password"></label>
                        <input style={fieldStyle} type="text" placeholder="Password"/>
                    </div>
                <h3>Personal Information:</h3>
                    <div>
                        <label htmlFor="addiction"></label>
                        <input style={fieldStyle} type="text" placeholder="Cigarettes, alcohol, etc.."/>
                        <label htmlFor="age"></label>
                        <input style={fieldStyle} type="text" placeholder="MM/DD/YYYY"/>
                    </div>
                    <br/>
                    <div>
                        <input type="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpFormData;