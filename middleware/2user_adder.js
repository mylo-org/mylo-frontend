const API = require("../classes/api.js");
module.exports = (req, resp, next) => {
  if (req.user_id) {
    API.getUser(req.user_id, (err, user) => {
      if (err) {
        console.log(`ERROR: Could not get user from middleware -- ${err} (${req.user_id})`.error);
        if (req.path === "/") {
          next()
        } else {
          resp.status(401).redirect("/");
        }
      } else {
        req.user = user;
        next();
      }
    })
  } else {
    next();
  }
}
