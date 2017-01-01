import config from 'config';
const Promise = require("bluebird");

const request = require('request-promise');

class API {
  getUser(user_id) {
    try {
      return request(`${config.API}/user/${user_id}`).then((data) => {
        return JSON.parse(data);
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default API;
