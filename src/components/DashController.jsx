import React from 'react';
import config from 'config';
import auth from '../scripts/auth';
import api from '../scripts/api';
import Dash from './Dash';
require("normalize.css/normalize.css");
require("styles/DashTop.css");
const API = new api();
const Auth = new auth();

class DashController extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.renderDash = this.renderDash.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  componentDidMount() {
    let userProm = this.getUser();
    if (userProm) {
      userProm.then((user) => {
        this.setState({ user: user[0] })
      });
    } else {
      this.setState({ redirect: true });
    }
  }

  getUser() {
    if (this.state.user) {
      return this.state.user;
    }
    let user_id = Auth.getUserId();
    if (user_id) {
      console.log(`Getting ${user_id}`);
      return API.getUser(user_id)
        .then((user) => {
          if (user) {
            return user;
          } else {
            this.setState({ redirect: true });
          }
        })
        .catch((err) => {
          console.error(err);
          if (err.statusCode && err.statusCode === 404) {
            this.setState({ redirect: true });
          }
        })
    } else {
      console.log(`No user`);
      return null;
    }
  }

  renderMenu() {
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="menu">
      {
        this.state.user.dashboards.map((dash)=>{
        return (<div key={dash.location}
          className="menuIcon">
            <img src={`${config.img_url}/icons${dash.icon}`} className="menuPicture"/>
          </div>)
      })}
      </div>
    );
  }

  renderDash() {
    if (!this.state.user) {
      return null;
    }
    return (<div className="dashContainer">
        {this.state.user.dashboards.map((dash) => {
            return (<Dash
              key={dash.location}
              location={dash.location}
              background={dash.background}
              widgets={dash.widgets}
               /> );
              }
        )}
        </div>)
  }

  render() {
    if (this.state.redirect === true) {
      Auth.revokeCookie();
      console.log(`Redirecting to /`);
      window.location = "/";
      return null;
    }
    return (
      <div className="DashController">
        {this.renderMenu()}
        {this.renderDash()}
      </div>)
  }
}

DashController.displayName = 'DashController';

export default DashController;
