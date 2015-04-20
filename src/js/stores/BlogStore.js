const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _blogs = [];

// Facebook style store creation.
let BlogStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      blogs: _blogs
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.BlogActionTypes.RECEIVE_ALL_BLOGS:
        _blogs = action.blogs;
        BlogStore.emitChange();
        break;
    }
  })

});

module.exports = BlogStore;
