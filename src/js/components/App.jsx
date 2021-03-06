import React from 'react';
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
import mui from 'material-ui';

let {RaisedButton, AppCanvas, AppBar, IconButton, Menu} = mui;
import MyLeftNav from './MyLeftNav.jsx';
import Router from 'react-router';

let {RouteHandler} = Router;

let App = React.createClass({

  mixins: [Router.State],

  render() {

    let title =
      this.context.router.isActive('login') ? 'Login' :
        this.context.router.isActive('main') ? 'Main' :
          this.context.router.isActive('recent') ? 'Recent' : '';

    return (
      <AppCanvas>
        <AppBar
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title={title}
          zDepth={1}>
        </AppBar>

        <MyLeftNav ref="leftNav" />

        <RouteHandler />

      </AppCanvas>
    );
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }

});

export default App;
