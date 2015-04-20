const keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    ADD_TASK: null,
    LOGIN: null

  }),

  BlogActionTypes : keyMirror({
    RECEIVE_ALL_BLOGS : null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
