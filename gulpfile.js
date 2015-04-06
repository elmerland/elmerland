var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    react = require('gulp-react'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css');

var PORT = 4000;
var ROOT = '_site/';
var WATCHED_FILES = [
    "*.html",
    "_drafts/**",
    "_includes/**",
    "_layouts/**",
    "_posts/**",
    "assets/**"
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
  gulp.src('sass/**/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      remove: true
    }))
    // .pipe(cssmin())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('jsx', function() {
  gulp.src('jsx/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('assets/js'));
})

gulp.task('watch', function() {
  gulp.watch('jsx/**', ['jsx']);
  gulp.watch('sass/**', ['sass']);
  gulp.watch(WATCHED_FILES, ['jekyll']);
})
 
gulp.task('default', ['jsx', 'sass', 'jekyll', 'webserver', 'watch']);

