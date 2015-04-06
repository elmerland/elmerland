var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    react = require('gulp-react'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');

var PORT = 4000;
var ROOT = '_site/';
var WATCHED_FILES = [
    "*.html",
    "_drafts/**",
    "_includes/**",
    "_layouts/**",
    "_posts/**"
];
var ASSETS = [
  '_assets/*',
  '_assets/code/**',
  '_assets/gif/**',
  '_assets/source/**',
  '_assets/svg/**'
];

// Run Jekyll Build Asynchronously
gulp.task('jekyll', function () {
  var jekyll = spawn('jekyll', ['build']);

  jekyll.on('exit', function (code) {
    console.log('-- Finished Jekyll Build --')
    gulp.src('_site/**')
      .pipe(connect.reload());
  })
});

gulp.task('webserver', function() {
  connect.server({
    root: ROOT,
    port: PORT,
    livereload: true
  });
});

gulp.task('sass', function() {
  gulp.src('_assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      remove: true
    }))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('jsx', function() {
  gulp.src('_assets/js/**/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(react())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('js', function() {
  gulp.src('_assets/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(react())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('assets', function() {
  console.log("trigger assets");
  gulp.src('_assets/code/**')
    .pipe(gulp.dest('assets/code'));
  gulp.src('_assets/gif/**')
    .pipe(gulp.dest('assets/gif'));
  gulp.src('_assets/source/**')
    .pipe(gulp.dest('assets/source'));
  gulp.src('_assets/svg/**')
    .pipe(gulp.dest('assets/svg'));
  gulp.src('_assets/*')
    .pipe(gulp.dest('assets/'));
});

gulp.task('watch', function() {
  gulp.watch('_assets/js/**/*.jsx', ['jsx', 'jekyll']);
  gulp.watch('_assets/js/**/*.js', ['js', 'jekyll']);
  gulp.watch('_assets/sass/**/*.scss', ['sass', 'jekyll']);
  gulp.watch(ASSETS, ['assets', 'jekyll']);
  gulp.watch(WATCHED_FILES, ['jekyll']);
});
 
gulp.task('default', ['assets', 'js', 'jsx', 'sass', 'jekyll', 'webserver', 'watch']);

