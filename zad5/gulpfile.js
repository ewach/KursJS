var gulp = require('gulp');
   uglify = require('gulp-uglify');
var gulpUtil = require('gulp-util');
var concat = require('gulp-concat');
var concat = require('gulp-concat');

gulp.task('default', function() {
  // place code for your default task here
});

 
gulp.task('concatenate', function() {
  return gulp.src(['./hello', './word'])
    .pipe(concat('result.txt'))
    .pipe(gulp.dest(' build/'));
});