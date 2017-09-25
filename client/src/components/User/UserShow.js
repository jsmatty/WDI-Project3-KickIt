import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
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
    }
  }
  
  render() {
    return (
      <div>
        <div>
          <h1>{user.username}</h1>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h3>{user.password}</h3>
          <h3>{user.age}</h3>
          <h3>{user.addiction}</h3>
        </div>
      </div>
    );
  }
}

export default UserShow;