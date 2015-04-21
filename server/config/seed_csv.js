/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var mongoose = require('mongoose');
var Blog = require('../api/blog/blog.model');
var async = require('async');
var csv = require('fast-csv');
var config = require('./environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
var blogs = {};
csv.fromPath(config.csv_blog, {
  delimiter : ';'
}).on("data", function(data) {
    blogs[data[0]] = {
      comments : [],
      text : data[1],
      createdAt : data[4]
    };
  }).on("end", function() {

  csv.fromPath(config.csv_comment, {
    delimiter : ';',
    escape : '\\'
  }).on("data", function(data) {

    blogs[data[1]].comments.push({
      text : data[2],
      createdAt : data[3]
    });
  }).on("end", function() {


    var blogArray = [];
    for(var key in blogs) {
      blogArray.push(blogs[key]);
    }
    async.each(blogArray, function(blog, cb) {
      Blog.create(blog, cb);
    }, function(err) {
      console.log(err);
    });

  });
});




