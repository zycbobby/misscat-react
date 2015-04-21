var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

import $ from 'jquery';
import Utils from '../utils/utils.js';

module.exports = {

  receiveAll: function(fail) {
    return $.ajax({
      url : '/api/blogs',
      type : 'GET',
      dataType: 'json'
    }).fail(xhr => {
      Utils.handleFail(xhr, fail);
    }).done(function(blogs){
      AppDispatcher.handleViewAction({
        type: Constants.BlogActionTypes.RECEIVE_ALL_BLOGS,
        blogs : blogs
      });
    });
  },

  sendNewBlog: function(blog, fail) {
    let that = this;
    return $.ajax({
      url : '/api/blogs',
      type : 'POST',
      data : blog,
      dataType: 'json'
    }).fail(xhr => {
      Utils.handleFail(xhr, fail);
    }).done(function(){
      that.receiveAll(fail);
    });
  },

  sendNewComment: function(blog, comment, fail) {
    let that = this;
    return $.ajax({
      url : '/api/blogs/' + blog._id + '/comments',
      type : 'POST',
      data : comment,
      dataType: 'json'
    }).fail(xhr => {
      Utils.handleFail(xhr, fail);
    }).done(function(){
      that.receiveAll(fail);
    });
  },

  getRecentComments : function(fail) {
    return $.ajax({
      url : '/api/blogs/comments',
      type : 'GET',
      dataType: 'json'
    }).fail(xhr => {
      Utils.handleFail(xhr, fail);
    }).done(function(comments){
      AppDispatcher.handleViewAction({
        type: Constants.BlogActionTypes.RECEIVE_ALL_COMMENTS,
        comments : comments
      });
    });
  }
};
