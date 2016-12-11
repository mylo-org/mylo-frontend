/* eslint-disable */

import { Redirect } from 'react-router';
import React from 'react';
import config from "config";
import auth from '../scripts/auth';
const Auth = new auth();

class Login extends React.Component {

  constructor() {

    super();
  }

  isUser() {
    let ui = Auth.getUserId();
    if (config.env === "dev" || ui) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.isUser()) {
      console.log(`Redirecting to /dash`);
      return <Redirect to="/dash" />;
    }
    return null;
  }
}

Login.displayName = 'Login';

// Uncomment properties you need
Login.propTypes = {
  location: React.PropTypes.object,
  routeParams: React.PropTypes.object,
};

export default Login;
