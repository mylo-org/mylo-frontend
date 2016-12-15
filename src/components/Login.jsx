/* eslint-disable */

import { Redirect } from 'react-router';
import React from 'react';
import auth from '../scripts/auth';
const Auth = new auth();
const DUMMY_USER = "30a0c5f7-f314-639f-c3a5-7e020d016090";

class Login extends React.Component {

  constructor() {

    super();
  }

  isUser() {
    let ui = Auth.getUserId();
    console.log(`User? ${ui}`);
    if (ui) {
      return true;
    } else {
      return false;
    }
  }

  setUser() {
    console.log(`Setting dummy user -- ${DUMMY_USER}`);
    Auth.setCookie(DUMMY_USER);
    this.setState({ redirect: true });
  }

  render() {
    if (this.isUser() || this.state.redirect === true) {
      console.log(`Redirecting to /dash`);
      window.location = "/dash";
    }
    return (<div>
      <span onClick={this.setUser()}>
      Dummy
      </span>
    </div>);
  }
}

Login.displayName = 'Login';

// Uncomment properties you need
Login.propTypes = {
  location: React.PropTypes.object,
  routeParams: React.PropTypes.object,
};

export default Login;
