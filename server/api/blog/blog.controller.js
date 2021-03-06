'use strict';

var _ = require('lodash');
var Blog = require('./blog.model');

// Get list of blogs
exports.index = function(req, res) {
  Blog.find()
    .sort({
      createdAt : -1
    })
    .exec(function (err, blogs) {
      if(err) { return handleError(res, err); }
      return res.json(200, blogs);
    });
};

// Get a single blog
exports.show = function(req, res) {
  Blog.findById(req.params.id, function (err, blog) {
    if(err) { return handleError(res, err); }
    if(!blog) { return res.send(404); }
    return res.json(blog);
  });
};

// Creates a new blog in the DB.
exports.create = function(req, res) {
  Blog.create(req.body, function(err, blog) {
    if(err) { return handleError(res, err); }
    return res.json(201, blog);
  });
};

// Updates an existing blog in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Blog.findById(req.params.id, function (err, blog) {
    if (err) { return handleError(res, err); }
    if(!blog) { return res.send(404); }
    var updated = _.merge(blog, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, blog);
    });
  });
};

// Deletes a blog from the DB.
exports.destroy = function(req, res) {
  Blog.findById(req.params.id, function (err, blog) {
    if(err) { return handleError(res, err); }
    if(!blog) { return res.send(404); }
    blog.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.comment = function(req, res) {
  Blog.findById(req.params.id, function (err, blog) {
    if(err) { return handleError(res, err); }
    if(!blog) { return res.send(404); }
    blog.comments.push(req.body);
    blog.save(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.showComment = function(req, res) {
  Blog.aggregate({
      $unwind : '$comments'
    }, {
      $project : { comments : '$comments', "_id" : 0}
    }, {
      $sort : {
        "comments.createdAt" : -1
      }
    }, function(err, result) {

    if(err) { return handleError(res, err); }
    return res.send(200, result);
  });
};

function handleError(res, err) {
  return res.send(200, err);
}
