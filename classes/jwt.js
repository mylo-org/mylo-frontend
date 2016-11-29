const JWT = require("jsonwebtoken");
const secret = require("../config")["JWT"];

class JWTUtils {
  decode(token, cb) {
    JWT.verify(token, secret, {}, (err, data) => {
      cb(err, data);
    })
  }
}

module.exports = new JWTUtils();
