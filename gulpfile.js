const gulp = require('gulp');
const browserSync = require('browser-sync');

const view = require('./gulp-task/view');
const scss = require('./gulp-task/scss');
const script = require('./gulp-task/script');
const image = require('./gulp-task/image');
const fonts = require('./gulp-task/fonts');
const watch = require('./gulp-task/watch');
const clean = require('./gulp-task/clean');
const libs = require('./gulp-task/libs');

function browsersync() {
    browserSync.init({
        server: "./dist/",
        port: 4000,
        notify: true
    });

    watch()
}

exports.default = gulp.series(
    gulp.parallel(clean),
    gulp.parallel(view, scss, script, image, fonts, libs),
    gulp.parallel(browsersync)
);