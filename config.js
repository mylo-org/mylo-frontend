const config = {
  prod: {
    port: process.env.PORT,
    redisURL: process.env.REDIS_URL
  },
  dev: {
    port: 8080,
    backend: "localhost:8550",
    redisURL: "localhost:6379"
  }
}

module.exports = config[process.env.NODE_ENV || "dev"];
