var dest = './dist';
var src = './src';
var gutil = require('gulp-util');

module.exports = {

  livereload : {
    src : src,
    port: 35729,
    basePath : dest,
    host: 'localhost'
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss,css}',
    dest: dest + '/styles',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  browserify: {
    settings: {
      transform: ['babelify']
    },
    src: src + '/js/index.jsx',
    dest: dest + '/js',
    outputName: 'index.js',
    debug: gutil.env.type === 'dev'
  },
  html: {
    src: 'src/index.html',
    dest: dest
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  },

  nodeserver: {
    entry : 'server/app.js',
    src: 'server/**/*.*'
  }

};
