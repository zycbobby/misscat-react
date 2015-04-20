var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  updateLogin: function(user) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.LOGIN,
      user : user
    });
  }
};
