const config = {
  prod: {
    port: process.env.PORT,
    backend: "https://mylo-api.herokuapp.com"
  },
  dev: {
    port: 8080,
    backend: "localhost:8550"
  }
}

module.exports = config[process.env.NODE_ENV || "dev"];
