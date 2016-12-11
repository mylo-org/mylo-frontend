const Cookie = require('js-cookie');
import config from "config";

class Auth {
  getUserId() {
    let user_id = Cookie.get('_ui');
    if (user_id) {
      return user_id;
    } else {
      if (config.env === "dev") {
        return "f9265439-9b1f-141d-9d8f-bfe58d783f0f"
      } else {
        return false;
      }
    }
  }
}

export default Auth;
