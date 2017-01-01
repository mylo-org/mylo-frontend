'use strict';

import baseConfig from './base';

let config = {
  env: 'dev',
  API: 'http://localhost:8550',
  dummy_user: "a59f2da9-9ff9-44cf-a8d7-d38ef36dfada"
};

export default Object.freeze(Object.assign({}, baseConfig, config));
