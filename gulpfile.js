var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var babel = require("gulp-babel");

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task("scripts", function () {
    return gulp.src('js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts','sass'], function() {
    gulp.watch(['js/**/*.js'], ['scripts']);
    gulp.watch(['scss/**/*.scss'], ['sass']);
});
