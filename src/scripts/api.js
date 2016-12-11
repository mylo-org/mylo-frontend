import config from 'config';

const request = require('request-promise');

class API {
  getUser(user_id) {
    let opts = {
      url: `${config.API}/user/${user_id}`,
      method: "GET",
      json: true
    }
    return request(opts);
  }
}

export default API;
