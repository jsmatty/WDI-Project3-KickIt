import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class EditUserPage extends Component {
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

   componentWillMount() {
              console.log('SHOW DATA')

        axios.get(`/api/users/${this.props.match.params.userId}`).then((res) => {
            console.log(res.data)
            this.setState({
                    _id: res.data._id,
                    username: res.data.username,
                    name: res.data.name,
                    addiction: res.data.addiction,
                    email: res.data.email,
                    password: res.data.password,
                    age: res.data.age
            })
            console.log(this.state.username);
        }).catch((err) => {
            console.log(err);
        });


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
    axios.patch(`/api/users/${this.props.match.params.userId}`, this.state)
    .then((res) => {
      this.setState({
        redirect: true
      })
    })
}

render(){
    if(this.state.redirect){
      console.log(this.state.redirect)
    return <Redirect to={`/user/${this.props.match.params.userId}`}/>
  }

    return(
        <form onSubmit = {this.handleSubmit}>
        <label>Name</label>
        <input type="text" name ="name" placeholder={this.state.name} value={this.state.name} onChange={(e) => this.handleChange(e)} />
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
          
export default EditUserPage;