'use strict';

import baseConfig from './base';

let config = {
  env: 'local',
  API: 'http://localhost:8550'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
