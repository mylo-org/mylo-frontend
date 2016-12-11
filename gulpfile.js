'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const colors = require("colors");
const fs = require("fs");
const path = require("path");

gulp.task('sass', () => {
  console.log(colors.green("SASS changed!"));
  return gulp.src('./src/styles/**/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task('watch', () => {
  gulp.watch("./src/styles/**/*.scss", ["sass"])
});

gulp.task("default", ["watch"]);
