const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _isLogin = false;

// add private functions to modify data
function checkLoginToken(userName, password) {
  _isLogin = password === '0428';
}

// Facebook style store creation.
let LoginStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getLoginState() {
    return {
      isLogin : _isLogin
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.LOGIN:
        let user = action.user;
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        checkLoginToken(user.name, user.password);
        LoginStore.emitChange();

        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = LoginStore;
