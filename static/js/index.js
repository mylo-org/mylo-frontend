const request = require("request");
const config = require("../../config.js");

const dealWithAPI = (service, username, password) => {
  let opts = {
    method: "POST",
    url: `${config["API"]}/user/new`,
    json: true,
    data: {
      service: "test_001",
      creds: {
        "username": "username",
        "password": "password"
      }
    }
  };
  request(opts, (err, resp, body) => {
    if (err) {
      console.error(`Error from API /user/new -- ${err}`);
      return;
    }
    Cookies.set("user_id", body.user_id);
    Cookies.set("user_token", body.user_token);
  })
}


const commands = {
  test: () => {}
}

const clearCookies = () => {
  let all = Cookies.get();
  for (let cookie in all) {
    Cookies.remove(cookie);
  }
}

const setupHandlers = () => {
  $(".login").on("click", function() {
    commands[$(this).attr("service")]();
  })
}

$(document).ready(() => {
  // setupTwitter();
  clearCookies();
  setupHandlers();
})
