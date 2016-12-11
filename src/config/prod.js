'use strict';

import baseConfig from './base';

let config = {
  env: 'prod',
  API: 'https://mylo-api.herokuapp.com'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
