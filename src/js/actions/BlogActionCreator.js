var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  receiveAll: function(data) {
    AppDispatcher.handleViewAction({
      type: Constants.BlogActionTypes.RECEIVE_ALL_BLOGS,
      blogs : data
    });
  }
};
