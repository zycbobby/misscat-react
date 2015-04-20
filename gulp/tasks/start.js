var gulp = require('gulp');

var config = require('../config').nodeserver;
var server = require( 'gulp-develop-server' );

gulp.task( 'server:start', function() {
  server.listen( { path: config.entry } );
});

gulp.task('server:restart', function() {
  gulp.watch( [ config.src ], server.restart );
});

gulp.task('server', ['server:start', 'server:restart']);
