import BlogAction from '../actions/BlogActionCreator.js';
import Utils from './utils.js';
import $ from 'jquery';

export default {
  getAllBlogs : function(fail) {
    $.ajax({
      url : '/api/blogs',
      type : 'GET',
      dataType: 'json'
    }).done(data => {
      BlogAction.receiveAll(data);
    }).fail(xhr => {
      Utils.handleFail(xhr, fail);
    });
  }
}
