const gulp = require("gulp");
const fonts = require("./fonts");
const image = require("./image");
const view = require("./view");
const script = require("./script");
const scss = require("./scss");
const { path } = require('../projectСonfig.json');

path.watch = {};

// Html path
path.watch.html = [];
path.watch.html[0] = path.src.html[0];

// Css path
path.watch.style = [];
path.watch.style[0]  = path.src.style[0].replace( path.src.style[0].split('/').pop(), '**/*.scss' );

// Js path
path.watch.script = [];
path.watch.script[0] = path.src.script[0].replace( path.src.script[0].split('/').pop(), '**/*.js' );

// Images path
path.watch.image = [];
path.watch.image[0] = path.src.image[0];
path.watch.image[1] = "!" + path.src.image[0].slice(0, -6) + "svgIcons/*.svg";

// Fonts path
path.watch.font = [];
path.watch.font[0] = path.src.font[0];
path.watch.font[1] = "!" + path.src.font[0].slice(0, -6) + "src/*.*";

module.exports = function watch() {
    gulp.watch(path.watch.html, view);
    gulp.watch(path.watch.style, scss);
    gulp.watch(path.watch.script, script);
    gulp.watch(path.watch.image, image);
    gulp.watch(path.watch.font, fonts);
}