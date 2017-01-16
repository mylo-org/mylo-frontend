/* eslint-disable */

import { Redirect } from 'react-router';
import React from 'react';
import Auth from '../../scripts/auth';
import Api from '../../scripts/api';
import config from 'config';

const dummyUserCreateData = {
  widget_id: "test",
  creds: {
    username: "foo",
    password: "bar"
  }
}

class Login extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.createDummy = this.createDummy.bind(this);
  }

  isUser() {
    let ui = Auth.getUserId() || false;
    console.log(`User? ${ui}`);
    return ui;
  }

  createDummy() {
    console.log(`Creating user`);
    Auth.createUser(dummyUserCreateData).then(() => {
      this.setState({ redirect: true })
    })
  }

  render() {
    if (this.isUser() || this.state.redirect === true) {
      console.log(`Redirecting to /dash`);
      window.location = "/dash";
    }
    return config.env !== "prod" ?
      (<div>
      <span style={{color: 'white'}} onClick={this.createDummy}>
      Create user
      </span>
    </div>) : null;
  }
}

Login.displayName = 'Login';

export default Login;
