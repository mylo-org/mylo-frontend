'use strict';

const bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const cookieParser = require("cookie-parser");
const colors = require("colors");
const fs = require("fs");

const config = require("./config.js");
const background_library = fs.readdirSync(path.resolve("./static/dash_backgrounds"));
const icon_library = fs.readdirSync(path.resolve("./static/icons"));
const API = require("./classes/api.js");

const port = config.port;
const app = express();
const server = require('http').createServer(app);

colors.setTheme({
  connect: ["yellow"],
  user: ["green"],
  action: ["cyan"],
  spam: ["grey"],
  error: ["red", "underline", "bold"],
  info: ["magenta"],
  warn: ['red']
})

app.use("/assets", express.static(path.resolve("./static")));
app.use("/assets", express.static(path.resolve("./dist")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.sendFile(path.resolve("./dist/index.html"));
})
app.get("/dash", (req, resp) => {
  resp.sendFile(path.resolve("./dist/index.html"));
})

app.get("*", (req, resp) => {
  console.log(`404 on ${req.path}`.warn);
  let req_path = req.path.split("/");
  if (req_path.indexOf("js") === -1 && req_path.indexOf("assets") === -1 && req_path.indexOf("stylesheets") === -1) {
    resp.status(404).redirect("/");
  } else {
    resp.status(404).end();
  }
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`.action);
})


const example_user = {
  "_id": "82a246aa-7008-8d1e-4ad5-29bfe7585417",
  "user_id": "82a246aa-7008-8d1e-4ad5-29bfe7585417",
  "links": ["test_001"],
  "dashboards": [{
    "icon": "/assets/icons/window.svg",
    "location": 0,
    "background": "/assets/dash_backgrounds/blue.jpg",
    "widgets": [{
      "name": "Test",
      "location": 0,
      "service": "test_001"
    }, {
      "name": "Add",
      "location": 1,
      "service": "add_001"
    }]
  }]
}
