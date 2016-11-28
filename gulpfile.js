'use strict';
const gulp = require('gulp');
const webpack = require("gulp-webpack");
const sass = require('gulp-sass');
const colors = require("colors");
const fs = require("fs");
const path = require("path");
const webpackConfig = {
  entry: './src/main.js',
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader'
    }]
  },
  output: {
    path: path.resolve(`./static/js`),
    filename: `dash_bundle.js`
  }
}

gulp.task('sass', () => {
  console.log(colors.green("File changed!"));
  return gulp.src('./src/stylesheets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/stylesheets'));
});

gulp.task("webpack", () => {
  gulp.src("./src/main.js")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("./static/js/"))
})

gulp.task('watch', () => {
  gulp.watch('./static/stylesheets/sass/**/*.scss', ['sass']);
  gulp.watch('./src/main.js', ["webpack"]);
});

gulp.task("default", ["watch"]);
