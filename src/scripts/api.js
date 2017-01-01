import config from 'config';

const request = require('request-promise');

class API {
  getUser(user_id) {
    let opts = {
      url: `${config.API}user/${user_id}`,
      method: "GET",
      json: true
    }
    try {
      return request(opts);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  getServiceImg(service) {
    let opts = {
      url: `${config.API}service/image?service=${service}`,
      method: "GET",
      json: true
    }
    try {
      return request(opts);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

export default API;
