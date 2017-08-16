import React, { Component } from 'react';
import axios from 'axios';
import {Button, Forms, Navbar} from 'react-materialize';

class NavBar extends Component {
  render() {
    return (
      <div>
         <nav>
        <div class = "nav-wrapper">
          <a href= "/" class = "brand-logo">Kick-It</a>
          <ul id="nav" class= "right hide-on-med-and-down">
          </ul>
        </div>
      </nav> 
      </div>
    );
  }
}

export default NavBar;