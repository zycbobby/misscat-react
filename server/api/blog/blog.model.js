'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogSchema = new Schema({
  text: String,
  comments : [{
    text : String,
    createdAt : Date
  }],
  images : [{
    data : String,
    type : String // jpeg or png
  }],
  type : Number,
  createdAt : Date,
  updatedAt : Date
});


BlogSchema.pre('save', function (next) {
  if (this.isNew && !this.createdAt) {
    this.createdAt = Date.now();
  } else {
    this.updatedAt = Date.now();
  }

  next();
});


module.exports = mongoose.model('Blog', BlogSchema);
