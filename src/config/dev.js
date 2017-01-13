'use strict';

import baseConfig from './base';

let config = {
  env: 'dev',
  API: 'https://api.mylo-dev.co',
  dummy_user: "0f3e88fb-de97-4575-8b0f-096836309ffb"
};

export default Object.freeze(Object.assign({}, baseConfig, config));
