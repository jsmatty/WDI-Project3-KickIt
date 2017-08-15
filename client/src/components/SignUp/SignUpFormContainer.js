import React, { Component } from 'react';
import axios from 'axios';
import SignUpForm from './SignUpForm';

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
