import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, Forms, Navbar} from 'react-materialize';
import styled from 'styled-components';

const NavBarStyle = styled.div `
background-color: black;
text-color: white;

`

class NavBar extends Component {
  render() {
    return (
      <div>
        
      <nav>
        adfasdfasdf
        <NavBarStyle class = "nav-wrapper">
          <button><Link to= "/" class= "brand-logo">Kick-It</Link></button>
          <button><Link to= "/user/:userId">Profile</Link></button>
        </NavBarStyle>
      </nav> 
      
      </div>
    );
  }
}

export default NavBar;