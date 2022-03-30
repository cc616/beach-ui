const gulp = require("gulp");
const path = require("path");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");

const paths = {
  es: path.resolve(__dirname, "../es"),
  dist: path.resolve(__dirname, "../dist"),
  lib: path.resolve(__dirname, "../lib"),
  less: path.resolve(__dirname, "../components/**/*.less"),
  ts: path.resolve(__dirname, "../components/**/*.d.ts"),
  lessSrc: [
    path.resolve(__dirname, "../components/**/*.less")
  ],
};

function less2css() {
  return gulp
    .src(paths.lessSrc)
    .pipe(less({
      outputStyle: "compressed"
    }))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(gulp.dest(paths.dist))
}


function copyCss() {
  return gulp
    .src(paths.lessSrc)
    .pipe(less({
      outputStyle: "compressed"
    }))
    .pipe(autoprefixer())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(gulp.dest(paths.es))
    .pipe(gulp.dest(paths.lib))
}

function copyLess() {
  return gulp.src(paths.less).pipe(gulp.dest(paths.es)).pipe(gulp.dest(paths.lib));
}

function copyTs() {
  return gulp
    .src(paths.ts)
    .pipe(gulp.dest(paths.es))
    .pipe(gulp.dest(paths.lib))
}

exports.default = gulp.parallel(copyLess, copyCss, copyTs, less2css);