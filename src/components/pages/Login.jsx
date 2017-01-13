/* eslint-disable */

import { Redirect } from 'react-router';
import React from 'react';
import Auth from '../../scripts/auth';
import config from 'config';
const DUMMY_USER = config["dummy_user"];

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
    return config.env !== "prod" ?
      (<div>
      <span onClick={this.setUser}>
      Dummy
      </span>
    </div>) : null;
  }
}

Login.displayName = 'Login';

export default Login;
