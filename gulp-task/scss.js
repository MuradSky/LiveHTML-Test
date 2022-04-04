const { src, dest,  } = require("gulp");
const { reload } = require("browser-sync");
const { init, write } = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const gulpif = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const rename = require("gulp-rename");

const isProd = require("./env");
const isDev = require("./env");

const { path } = require('../projectСonfig.json');

path.src.style[0] = path.src.srcPath + path.src.style[0];

path.dist.style = path.dist.distPath + path.dist.style;

module.exports = function scss(){
    return src(path.src.style)
        .pipe(gulpif(isDev(), init()))
        .pipe(sass())
        .pipe(gulpif(isProd(), autoprefixer({
            grid: true
        })))
        .pipe(gulpif(isProd(), gcmq()))
        .pipe(gulpif(isDev(), write()))
        .pipe(gulpif(isProd(), dest(path.dist.style)))
        .pipe(gulpif(isProd(), csso()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(path.dist.style))
		.pipe(reload({stream: true}))
}