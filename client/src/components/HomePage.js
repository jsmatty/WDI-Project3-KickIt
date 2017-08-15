import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Splash from 'react-splash';
import axios from 'axios';


class HomePage extends Component {
  render() {
    return (
       <div>
      <Splash 
  text="Kick It" 
  src="https://images.pexels.com/photos/247040/pexels-photo-247040.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" 
  style={{ height: '70vh' }}
/>
     
        <Link to="/login"><button>Log in</button></Link>

        W E L C O M E

        <Link to="/createaccount">Sign up</Link>

      </div>
    );
  }
}

export default HomePage;