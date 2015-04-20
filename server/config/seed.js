/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var mongoose = require('mongoose');
var Blog = require('../api/blog/blog.model');
var async = require('async');

var data = [
  { text : 'blog 1, hello'
    , comments : [
    {
      text : 'c1',
      createdAt : Date.now()
    }
  ]
    , type : 1
  },

  { text : 'blog 2, hello 2'
    , comments : [
    {
      text : 'c1',
      createdAt : Date.now()
    }
  ]
    , type : 1
  }

];

Blog.remove(function(){

  async.each(data, function (item, cb) {
    Blog.create(item, cb);
  }, function (err) {

    console.log('finish insert fake data');
  });
});

