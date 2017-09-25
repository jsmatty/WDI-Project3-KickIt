import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {Button, Forms, Navbar} from 'react-materialize';
import styled from 'styled-components';


class UserShow extends Component {
  constructor (){
    super();
    this.state = {
      userId: '',
      username: '',
      name: '',
      email: '',
      password: '',
      age: '',
      addiction: '',
      redirect: false
    }
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


     deleteUser = () => {
        axios.delete(`/api/users/${this.props.match.params.userId}`).then((res) => {
            console.log('user deleted!');
            
        }).catch((err) => {
            console.log(err);
        })
        this.setState({ redirect: true });
     }

 
  render() {
    if(this.state.redirect){
      return <Redirect to={`/`} />
    }
    console.log(this.props)
    return (
      <div>
        <div>
          <h1>Username: {this.state.username}</h1>
          <h3>Name: {this.state.name}</h3>
          <h3>Email: {this.state.email}</h3>
          <h3>Age: {this.state.age}</h3>
          <h3>Addiction: {this.state.addiction}</h3>
        </div>
        <Link to={`/user/${this.props.match.params.userId}/edit`}><button>EDIT</button></Link>
        <button onClick={this.deleteUser}>DELETE ACCOUNT</button>
      </div>
    );
  }
}

export default UserShow;