/* eslint-disable */

import { Redirect } from 'react-router';
import React from 'react';
import auth from '../../scripts/auth';
const Auth = new auth();
const DUMMY_USER = "4681113b-64df-4c3b-98b6-cd0bf6dfa0fd";

class Login extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.setUser = this.setUser.bind(this);
  }

  isUser() {
    let ui = Auth.getUserId() || false;
    console.log(`User? ${ui}`);
    return ui;
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
