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
  },
  myloLogo = require("../../images/lifesaver.png");


require("../../styles/Login.css");

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      loginMethods: [{
        name: 'instagram',
        img: require('../../images/Instagram.png'),
        redirect: 'somewhere/i/think'
      }]
    };
    this.renderLoginMethods = this.renderLoginMethods.bind(this);
  }

  componentDidMount() {
    Api.getLoginImgs().then((lib) => {
      this.setState({ library: lib });
    })
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

  renderLoginMethods() {
    return (
      <div className='loginMethods loginElem'>
      {
        this.state.loginMethods.forEach((method)=>{
          console.log(method);
          return (
            <a ref={method.redirect} className={`login-method-redirect ${method.name}`}>
              <div className={`login-method ${method.name}`}>
                <img src={method.img} className={`login-method-image ${method.name}`} />
              </div>
            </a>
            )
        })
      }
      </div>
    )
  }

  renderLogin() {
    return (
      <div className='loginContainer'>
       <div className='mylo-logo loginElem'>
          <img src={myloLogo} className='mylo-logo-img'/>
        </div>
        <div className='cheesy-text'>
          Welcome to Mylo, <br></br> your online lifesaver.
        </div>
        <div className='seperator loginElem'>
          <div className='seperator-line' />
            <div className='seperator-text'>
              Sign in with
            </div>
          <div className='seperator-line' />
        </div>
        {this.renderLoginMethods()}
      </div>
    )
  }

  render() {
    if (this.isUser() || this.state.redirect === true) {
      console.log(`Redirecting to /dash`);
      window.location = "/dash";
    }
    const { library } = this.state;
    console.log(library && library.length);
    const this_pic = library && library.length ? library[Math.floor(Math.random() * library.length)] : null;
    console.log(this_pic)
    return (<div className='loginPage'
      style={{'background': `url(${this_pic}) noRepeat center center fixed`}}> 
      { this.renderLogin() }
      </div>);
  }
}

Login.displayName = 'Login';

export default Login;
