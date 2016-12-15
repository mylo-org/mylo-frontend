'use strict';

import baseConfig from './base';

let config = {
  env: 'dev',
  port: 8080,
  API: 'http://localhost:8550',
  JWT: "(P*O_=n"
};

export default Object.freeze(Object.assign({}, baseConfig, config));
