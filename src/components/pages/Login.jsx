/* eslint-disable */

import { Redirect } from 'react-router';
import React from 'react';
import auth from '../../scripts/auth';
const Auth = new auth();
const DUMMY_USER = "df4c88c5-c9af-4016-8d86-bad572cf19be";

class Login extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.setUser = this.setUser.bind(this);
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
      <span onClick={this.setUser}>
      Dummy
      </span>
    </div>);
  }
}

Login.displayName = 'Login';

export default Login;
