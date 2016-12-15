'use strict';

import baseConfig from './base';

let config = {
  env: 'prod',
  port: process.env.PORT,
  API: "https://mylo-api.herokuapp.com",
  JWT: process.env.JWT
};

export default Object.freeze(Object.assign({}, baseConfig, config));
