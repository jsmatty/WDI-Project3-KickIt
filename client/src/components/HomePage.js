import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';


class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Log in</Link>

        W E L C O M E

        <Link to="/createaccount">Sign up</Link>

      </div>
    );
  }
}

export default HomePage;