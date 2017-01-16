import React from 'react';
import Auth from '../../../scripts/auth';
import API from '../../../scripts/api';
import Dash from './Dash';
import Menu from './Menu';
require("normalize.css/normalize.css");
require("styles/DashTop.css");
const Promise = require("bluebird");

class DashController extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: true,
      settings: false,
      active: 0
    };
    this.renderDash = this.renderDash.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
      .then((user) => {
        this.setState({ user: user })
      })
      .catch((err) => {
        console.error(`Error getting user from init -- ${err} ${err.stack}`);
        this.setState({ redirect: true });
      })
  }

  getUser() {
    return new Promise((res, rej) => {
      if (this.state.user) {
        return res(this.state.user);
      }
      let user_id = Auth.getUserId();
      if (user_id) {
        console.log(`Getting ${user_id}`);
        return API.getUser(user_id)
          .then((user) => {
            res(user);
          })
          .catch((err) => {
            console.error(`Error getting user from API -- ${err} ${err.stack}`);
            this.setState({ redirect: true });
          })
      } else {
        return rej(`No user?`);
      }
    })
  }

  setActive(pos) {
    if (typeof pos !== 'number') {
      console.error(`Position must be number to set active`);
      return;
    }
    this.setState({ active: pos });
  }

  renderDash() {
    if (!this.state.user) {
      return null;
    }
    // const nonActives = this.state.user.dashboards.filter((dash) => {
    // return dash.location !== this.state.active
    // })
    return (<div className="dashContainer">
        {this.state.user.dashboards.forEach((dash,i) => {
            return (
              <Dash
              key={dash.location}
              location={dash.location}
              widgets={dash.widgets}
              active={this.state.active === i}
              cb={this.setActive}
              amount={this.state.user.dashboards.length}
              />);
          }
        )}
        </div>)
  }

  renderMenu() {
    if (!this.state.user || this.state.user.dashboards.length == 1) {
      return null;
    }
    return (<Menu/>)
  }

  toggleSettings() {
    this.setState({ settings: !this.state.settings })
  }
  renderSettingsHeader() {
    return null;
  }
  renderView() {
    return null;
  }

  renderSettings() {
    if (this.state.settings !== true) {
      return;
    }

    //TODO: Make this a seperate component
    return (
      <div className='settingCont'>
        <div className="header">
          {this.renderSettingsHeader()}
        </div>
        <div className="view">
          {this.renderView()}
        </div>
      </div>
    );
  }

  renderDashParts() {
    return (
      <div className="dashParts">
      { this.renderMenu() }
       { this.renderDash() }
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
        {this.state.settings === true ? this.renderSettings() : this.renderDashParts() }
        <div className="settings" onClick={this.toggleSettings}></div>
      </div>)
  }
}

DashController.displayName = 'DashController';

export default DashController;
