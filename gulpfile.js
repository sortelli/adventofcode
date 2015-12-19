'use strict'

var gulp       = require("gulp")
var sourcemaps = require("gulp-sourcemaps")
var babel      = require("gulp-babel")

gulp.task("default", function() {
  gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("app"))
})
