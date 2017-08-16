import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Splash from 'react-splash';
import axios from 'axios';

import Login from './SignUp/LogIn'


class HomePage extends Component {
  render() {
    return (
       <div>
                                    
      <Splash 
       text="Kick It" 
        src="https://images.pexels.com/photos/247040/pexels-photo-247040.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" 
        style={{ height: '70vh' }}
      />
     
      <Login />

      </div>
    );
  }
}

export default HomePage;