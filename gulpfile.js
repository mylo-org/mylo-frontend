'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const colors = require("colors");
const fs = require("fs");
const path = require("path");

gulp.task('sass', () => {
  console.log(colors.green("SASS changed!"));
  return gulp.src('./src/styles/sass/**/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles'));
});

gulp.task('watch', () => {
  gulp.watch("./src/styles/sass/**/*.scss", ["sass"])
});

gulp.task("default", ["watch"]);
