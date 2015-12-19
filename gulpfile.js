'use strict'

var gulp       = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var babel      = require('gulp-babel')
var istanbul   = require('gulp-babel-istanbul')
var mocha      = require('gulp-mocha')
var merge      = require('merge-stream')

var in_test_watch = false

gulp.task('build', function() {
  gulp.src(['src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app'))
})

gulp.task('test', ['build'], function(done) {
  merge(
    gulp.src(['src/**/*.js'])
      .pipe(istanbul({includeUntested: true}))
  ,
    gulp.src(['test/**/*.js'])
      .pipe(babel())
  ).pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src('test/**/*.js')
        .pipe(mocha({reporter: 'spec'}))
        .on('error', function(err) {
          console.log(err.message)
          if (in_test_watch)
            this.emit('end')
          else
            process.exit(1)
        })
        .pipe(istanbul.writeReports())
        .on('end', done)
    })
})

gulp.task('test-watch', function() {
  in_test_watch = true
  gulp.watch(['src/**', 'test/**'], ['test'])
})
