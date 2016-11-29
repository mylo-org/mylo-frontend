module.exports = (req, resp, next) => {
  console.log(`${req.method} on ${req.path}`.connect);
  next();
}
