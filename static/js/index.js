// const request = require("request");
// const config = require("../config.js");
// const twitter_api = "http://api.twitter.com";
//   // const statusChangeCb = (resp) => {
//   //   console.log("FB CB Called");
//   //   console.log(resp);
//   //   switch (resp.status) {
//   //     case "connected":
//   //       console.log("User connected through FB");
//   //       break;
//   //     case "not_authorized":
//   //       console.log("Not authed w/ FB");
//   //       break;
//   //     default:
//   //       console.log("other FB")
//   //       break;
//   //   }
//   // };

// // const checkFbState = () => {
// //   console.log("checking");
// //   FB.getLoginStatus((resp) => {
// //     statusChangeCb(resp);
// //   });
// // };

// // $(document).ready(() => {
// //   window.fbAsyncInit = function() {
// //     FB.init({
// //       appId: '111825175967726',
// //       cookie: true,
// //       xfbml: true,
// //       version: 'v2.8'
// //     });
// //   };
// // });

// const setupTwitter = () => {
//   request.post(`${twitter_api}/oauth/request_token`,{})
// }

const clearCookies = () => {
  let all = Cookies.get();
  for (let cookie in all) {
    Cookies.remove(cookie);
  }
}

$(document).ready(() => {
  // setupTwitter();
  clearCookies();
})
