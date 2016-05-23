var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('default', ['lint', 'sassify', 'watch']);

gulp.task('watch', function() {
  gulp.watch('./../app/**/*.js', ['lint']);
  gulp.watch('./../sass/**/*.sass', ['sassify']);
});

gulp.task('sassify', function () {
  return gulp.src('./../sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./../styles'));
});


gulp.task('lint', function() {
  return gulp.src('./../app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});