const request = require("request");
const config = require("../config.js");
class API {
  getUser(user_id, cb) {
    let url = `${config.api}/user/${user_id}`;
    request(url, (err, resp, body) => {
      if (body === "[]") {
        console.log(`Invalid user_id -- ${user_id}`);
        cb(`Invalid user_id`);
      } else {
        let user = JSON.parse(body[0]);
        cb(null, user);
      }
    })
  }
}

module.exports = new API();
