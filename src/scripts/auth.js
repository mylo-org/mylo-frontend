import api from './api';
const API = new api();
const Cookie = require('js-cookie');

class Auth {
  getUserId() {
    let user_id = Cookie.get('_ui');
    if (user_id) {
      return user_id;
    } else {
      return false;
    }
  }
  setCookie(ui) {
    if (this.getUserId()) {
      return true;
    }
    if (ui) {
      API.getUser(ui)
        .then((user) => {
          user = user[0];
          if (user.user_id === ui) {
            Cookie.set("_ui", ui);
          } else {
            console.warn(`Somehow not matching user_id from DB and local? API: ${user.user_id}; Local: ${ui}`);
            return false;
          }
        })
        .catch((err) => {
          console.error(err);
          return false;
        })
    } else {
      console.warn(`Attempted to set user without passing id`);
      return false;
    }
  }
  revokeCookie() {
    if (Cookie.get("_ui")) {
      Cookie.remove("_ui");
    }
    return true;
  }
}

export default Auth;
