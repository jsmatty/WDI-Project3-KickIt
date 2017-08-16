import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class CreateAccount extends Component {
constructor(){
  super();
// set initial state to include our input fields 'name' and 'description'
  this.state={
    name: ' ',
    email: ' ',
    username: ' ',
    password: ' ',
    age: ' ',
    addiction: ' '
  }

// binding these functions to this specific Component
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
 }

// this func is called onChange when our input fields are filled
handleChange(event){
  // set variables for our elements, their name attributes, and their values
  const target = event.target;
  const name = target.name;
  const value = target.value;

  // create an object to hold current state of the updated keys and values
  const newState = {
    // computed property syntax from ES6:
    // this updates every state key and value using the 'name' attribute of our input elements
    //and the value of those individual elements
    [name]: value
  };
// Set the state with our newState object
    this.setState(newState);


// Testing handleChange function
  // console.log(Object.keys(newState));
  // console.dir(newState)
  // console.log('State - name: ' + this.state.name);
  // console.log('Future State - name: ' + newState.name);
  // console.log('State - desc: ' + this.state.description);
  // console.log('Future State - desc: ' + newState.description);
}

// This function will handle what happens when submit is fired.
// This where axios will hit the POST route of our API

handleSubmit(event){
    axios.post('/api/users', {
      name: this.state.name,
			email: this.state.email,
			username: this.state.username,
			password: this.state.password,
			age: this.state.age,
			addiction: this.state.addiction
    })
    // alert("helloos" + this.state.name);
    // alert(this.state.description)
}

render(){
    return(
        <form onSubmit = {this.handleSubmit}>
        <label>Name</label>
        <input type="text" name ="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        <label>Email</label>
        <input type="text" name ="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
        <label>Username</label>
        <input type="text" name ="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
				<label>Password</label>
        <input type="text" name ="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
				<label>Age</label>
        <input type="text" name ="age" value={this.state.age} onChange={(e) => this.handleChange(e)} />
				<label>Addiction</label>
        <input type="text" name ="addiction" value={this.state.addiction} onChange={(e) => this.handleChange(e)} />
        <input type="submit" value="submit" />
        </form>
    )
 }

}
          
export default CreateAccount;