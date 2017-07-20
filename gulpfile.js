var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var htmlmin = require('gulp-html-minifier');
var autoprefix = require('gulp-autoprefixer');
var minifyjs = require('gulp-js-minify');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('less', function() {
  gulp.src('src/less/*')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(autoprefix(('last 2 version')))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('scripts', function() {
  gulp.src(['src/js/Task.js', 'src/js/Command.js', 'src/js/AddTaskCommand.js', 'src/js/toggle-left-menu.js', 'src/js/script.js'])
    .pipe(babel({
      presets: ['es2015', 'es2016'], 
      plugins: ["transform-es2015-arrow-functions"]
    }))
    .pipe(concat('script.js'))
    //.pipe(minifyjs())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('images', function() {
  gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/less/*.less', ['less']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['images']);
});

gulp.task('webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['html', 'less', 'scripts', 'images', 'watch', 'webserver']);