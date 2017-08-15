import React, { Component } from 'react';
import axios from 'axios';
import SignUpForm from './SignUpForm';
import {Button, Forms} from 'react-materialize';

class SignUpFormContainer extends Component {
  render() {
    return (
      <div>
        <SignUpFormData />
      </div>
    );
  }
}

export default SignUpFormContainer;
