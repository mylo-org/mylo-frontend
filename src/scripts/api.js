import config from 'config';
import Auth from './auth.js';
const Promise = require("bluebird");

const request = require('request-promise');


class API {
  getHeaders() {
    return { 'X-User-Token': Auth.getToken() }
  }

  _get(url) {
    const opts = {
      method: 'GET',
      url: `${config.API}${url}`,
      headers: this.getHeaders(),
      json: true
    }
    return request(opts);
  }
  _post(url, data) {
    const opts = {
      method: 'POST',
      url: `${config.API}${url}`,
      json: true,
      headers: this.getHeaders(),
      body: typeof data === 'object' ? data : {}
    }
    return request(opts);
  }
  getUser(user_id) {
    try {
      return this._get(`/user/${user_id}`);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  getWidget(widget_id) {
    return this._get(`/widget/${widget_id}`)
  }
  createUser(data) {
    return this._post('/user/new', data);
  }
  getLoginImgs() {
    return this._get('/images/login_lib');
  }
}

export default new API();
