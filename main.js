'use strict';

const bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const hbs = require("hbs");
const path = require("path");
const cookieParser = require("cookie-parser");
const colors = require("colors");
const app = express();
const server = require('http').createServer(app);
const connector = require("./middleware/logger.js");

const config = require("./config.js");
const port = config.port;

const background_library = require("fs").readdirSync(path.resolve("./src/assets/dash_backgrounds"));

const example_dash = {
  icon: "/assets/window.svg",
  location: 0,
  background: background_library[Math.floor(Math.random() * background_library.length)],
  widgets: [{
    name: "Spotify",
    location: 0,
    service: "spotify_001"
  }, {
    name: "Facebook",
    location: 1,
    service: "fb_001"
  }, {
    name: "Twitter",
    location: 2,
    service: "twt_001"
  }, {
    name: "Instagram",
    location: 3,
    service: "inst_001"
  }, {
    name: "Google",
    location: 4,
    service: "google_001"
  }, {
    name: "test",
    location: 5,
    service: "test_001"
  }]
}

const example_user = {
  links: [{
    service: "spotify_001",
    unsolved_key: 12324354657, //<-- genRandom() + JWT w/ different secret
    credentials_location: `/user/hbsekuarhgjgnvbeayrkgj,n2t43q4wer/spotify_001/12324354657` // <-- key must be un-JWTed
  }, {
    service: "fb_001",
    unsolved_key: 143590890,
    credentials_location: `/user/hbsekuarhgjgnvbeayrkgj,n2t43q4wer/fb_001/143590890` // <-- REDIS/user/USER_ID/SERVICE/SOLVED_KEY
  }],
  user_id: "hbsekuarhgjgnvbeayrkgj,n2t43q4wer",
  dashboards: []
}

example_user.dashboards.push(Object.assign({}, example_dash));
// example_user.dashboards.push(Object.assign({}, example_dash, { icon: "/assets/smile.svg", location: 1 }));



/*
Yellow: New connections
Green: Specific thing happening to user
Cyan: Server Action
Grey: Spam to mostly ignore
Red, Underline, Bold: Error
Red: Warning 
*/

colors.setTheme({
  connect: ["yellow"],
  user: ["green"],
  action: ["cyan"],
  spam: ["grey"],
  error: ["red", "underline", "bold"],
  info: ["magenta"],
  warn: ['red']
})

app.set("views", path.join("./src"));
app.set("view engine", "hbs");
app.use(cookieParser());
app.use(connector);
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/js", express.static(path.resolve("./src/js")));
app.use("/assets", express.static(path.resolve("./src/assets")));
app.use("/stylesheets", express.static(path.resolve("./src/stylesheets")));

app.get("/", (req, resp) => {
  resp.render("dash", example_user, (err, html) => {
    if (err) {
      console.log(`Error rendering index page -- ${err}`.warn);
    } else {
      resp.status(200).send(html).end();
    }
  })
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
