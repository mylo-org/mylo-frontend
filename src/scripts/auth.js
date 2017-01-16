import API from './api';
const Promise = require("bluebird");
const Cookie = require('js-cookie');

class Auth {
  getUserId() {
    return Cookie.get('_ui');
  }
  setCookie(ui) {
    return new Promise((res, rej) => {
      const cookied_ui = this.getUserId();
      if (cookied_ui) {
        return res(cookied_ui);
      }
      if (ui) {
        Cookie.set("_ui", ui);
        return res();
      } else {
        return rej(`Attempted to set user without passing id`);
      }
    })
  }
  revokeCookie() {
    if (Cookie.get("_ui")) {
      Cookie.remove("_ui");
    }
    return true;
  }

  setToken(token) {
    return new Promise((res, rej) => {
      if (token.split(".").length === 3) {
        Cookie.set('_ut', token);
        return res();
      } else {
        return rej(`Invalid user token -- ${token}`);
      }
    })
  }

  createUser(data) {
    return API.createUser(data).then((user) => {
      return this.setCookie(user._id)
        .then(() => {
          return this.setToken(user._user_token);
        })
    })
  }
}

export default new Auth();
