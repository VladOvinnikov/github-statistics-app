/**
 * Created by vlad on 26/07/16.
 */
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: false}),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// ------------------------ Default task -------------------------------//
// browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function () {
    browserSync.init({
        server: "./app",
        port: 8000
    });
});

// SASS task, will run when any SCSS files change
gulp.task('sass-compress-css', function () {
    gulp.src('app/css/styles.scss')
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.csso())
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

// reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Watcher changes in sass-compress-css files
gulp.task('watch', function () {
    gulp.watch([
        'app/*.html',
        'app/views/*.html'
    ], ['bs-reload']);
    gulp.watch(
        'app/css/*.scss',
        ['sass-compress-css', 'bs-reload']);
    gulp.watch([
        'app/*.js',
        'app/config/*.js',
        'app/controllers/*.js',
        'app/directives/*.js',
        'app/filters/*.js',
        'app/services/*.js'
    ], ['bs-reload']);
});

// default task to be run with `gulp` command
gulp.task('default', ['browser-sync', 'sass-compress-css', 'watch']);