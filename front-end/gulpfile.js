var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var browserify = require('browserify');

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});
 
var fs = require('fs'); 
gulp.task('react', function() {
  //console.log('reacting');
  browserify("./main.jsx")
    .transform("babelify")
    .bundle()
    .pipe(fs.createWriteStream('./bundle.js'))
  
})

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['./**/*.jsx'], ['react']);
});


