var gulp = require('gulp');
var config = require('../config').watch;
var livereloadConfig = require('../config').livereload;
var livereload = require('gulp-livereload');

gulp.task('watch', ['build'], function() {

  livereload.listen({
    port : livereloadConfig.port,
    host : livereloadConfig.host,
    basePath : livereloadConfig.basePath
  });
  gulp.watch(config.src, config.tasks);
});
