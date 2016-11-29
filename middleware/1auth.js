const JWT = require("../classes/jwt.js");
module.exports = (req, resp, next) => {
  if (req.cookies.user_id) {
    req.user_id = req.cookies.user_id;
    console.log(`Added ${req.user_id} from cookie`.spam);
    next();
  } else if (req.headers["x-user-token"]) {
    let payload = JWT.decode(req.headers["x-user-token"], (err, payload) => {
      req.user_id = payload.user_id;
      console.log(`Added ${req.user_id} from headers`.spam);
      next();
    })
  } else {
    next();
  }
}
