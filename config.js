const config = {
  prod: {
    port: process.env.PORT,
    api: "https://mylo-api.herokuapp.com",
    JWT: process.env.JWT
  },
  dev: {
    port: 8080,
    api: "http://localhost:8550",
    JWT: "(P*O_=n"
  }
}

module.exports = config[process.env.NODE_ENV || "dev"];
