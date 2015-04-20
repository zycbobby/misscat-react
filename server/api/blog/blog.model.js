'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  createdAt : String
});

module.exports = mongoose.model('Blog', BlogSchema);
