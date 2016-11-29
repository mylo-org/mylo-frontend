module.exports = (req, resp, next) => {
  if (req.user_id) {
    if (!req.user) {
      return next();
    }
    switch (req.path) {
      case "/":
        resp.redirect("/dash");
        console.log(`Redirecting bases on user_id -- ${req.user_id}`.spam);
        break;
      case "/dash":
        next();
        break;
      default:
        resp.redirect("/dash");
        console.log(`Redirecting bases on user_id -- ${req.user_id}`.spam);
        break;
    }
  } else {
    if (req.path === "/") {
      next();
    } else {
      resp.redirect("/");
    }
  }
}
