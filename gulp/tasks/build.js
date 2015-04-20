var gulp = require('gulp');

var livereloadConfig = require('../config').livereload;
var livereload = require('gulp-livereload');

gulp.task('build', ['browserify', 'styles', 'html'], function() {
  gulp.src(livereloadConfig.src).pipe(livereload({
    port : livereloadConfig.port,
    host : livereloadConfig.host,
    basePath : livereloadConfig.basePath
  }));
});
