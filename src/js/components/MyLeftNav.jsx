import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';

let menuItems = [
    { route: 'login', text: 'Login' },
    { route: 'main', text: 'Main' },
    { route: 'recent', text: 'Recent' }
  ];

let MyLeftNav = React.createClass({

  mixins: [Router.Navigation, Router.State],

  getInitialState() {
    return {
      selectedIndex: null
    };
  },


  render: function() {
    //var header = <div className="logo" onClick={this._onHeaderClick}>material ui</div>;

    return (
      <mui.LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={true}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  },

  toggle: function() {
    this.refs.leftNav.toggle();
  },

  _getSelectedIndex: function() {
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    };
  },

  _onLeftNavChange: function(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  },

  _onHeaderClick: function() {
    this.context.router.transitionTo('main');
    this.refs.leftNav.close();
  }
});

export default MyLeftNav;
