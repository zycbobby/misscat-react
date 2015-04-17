import React from 'react';
import Router from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Main from './components/Main.jsx';
import Recent from './components/Recent.jsx';

let {RouteHandler, Route, Redirect} = Router;

let routes = (
  <Route handler={App} path="/">
    <Route name="login" path="/login" handler={Login} />
    <Route name="main" path="/main" handler={Main} />
    <Route name="recent" path="/recent" handler={Recent} />
    <Redirect from="*" to="login" />
  </Route>
);

Router.create({
  routes: routes,
  scrollBehavior: Router.ScrollToTopBehavior
}).run(function (Handler, state) {
  React.render(<Handler/>, document.getElementById('main'));
});

