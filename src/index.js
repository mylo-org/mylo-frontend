import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './components/Login';
import DashController from './components/DashController';
// Render the main component into the dom

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/dash" component={DashController} />
    </Route>
  </Router>
), document.getElementById('app'));
