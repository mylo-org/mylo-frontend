'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const colors = require("colors");

gulp.task('sass', () => {
  console.log(colors.green("File changed!"));
  return gulp.src('./src/stylesheets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/stylesheets'));
});

gulp.task('watch', () => {
  gulp.watch('./src/stylesheets/sass/**/*.scss', ['sass']);
});

gulp.task("default", ["watch"]);
