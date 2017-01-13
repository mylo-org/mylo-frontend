import config from 'config';
const Promise = require("bluebird");

const request = require('request-promise');

class API {
  _get(url) {
    const opts = {
      method: 'GET',
      url: `${config.API}${url}`,
      json: true
    }
    return request(opts);
  }
  getUser(user_id) {
    try {
      return this._get(`/user/${user_id}`).then((data) => {
        return JSON.parse(data);
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }
  getWidget(widget_id) {
    return this._get(`/widget/${widget_id}`)
  }
}

export default new API();
