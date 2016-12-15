import config from 'config';

const request = require('request-promise');

class API {
  getUser(user_id) {
    let opts = {
      url: `${config.API}/user/${user_id}`,
      method: "GET",
      json: true
    }
    try {
      let payload = request(opts);
      return payload;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

export default API;
