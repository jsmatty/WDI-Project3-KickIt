import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, Forms, Navbar, NavItem} from 'react-materialize';
import styled from 'styled-components';

const NavBarStyle = styled.div `
background-color: black;
text-color: white;

`

class NavBar extends Component {
  render() {
    console.log('Navbar ' + this.props)
    return (
      <div>
      
        <Navbar brand='Kick-It' href='/' right>
          <NavItem href='/user/:userId'>Profile</NavItem>
          <NavItem href='/journal'>Journal</NavItem>
        </Navbar>
          
       
      
      
      </div>
    );
  }
}

export default NavBar;