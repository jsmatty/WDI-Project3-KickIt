import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class CreateAccount extends Component {
constructor(){
  super();
  this.state={
    name: ' ',
    email: ' ',
    username: ' ',
    password: ' ',
    age: ' ',
    addiction: ' ',
    redirect: false
  }

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
 }

handleChange(event){
  const target = event.target;
  const name = target.name;
  const value = target.value;
  const newState = {
    [name]: value
  };
    this.setState(newState);
}


handleSubmit(event){
  event.preventDefault();
    axios.post('/api/users', {
      name: this.state.name,
			email: this.state.email,
			username: this.state.username,
			password: this.state.password,
			age: this.state.age,
			addiction: this.state.addiction,
     
    })
    .then((res) => {
      this.setState({
        redirect: true
      })
    })
}

render(){
    if(this.state.redirect){
      console.log(this.state.redirect)
    return <Redirect to="/" />
  }

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