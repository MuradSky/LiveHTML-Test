const { src, dest, series  } = require("gulp");
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');

const { path } = require('../projectСonfig.json');

function ttf2woff2Converter(){
	return src(path.src.font[0].slice(0, -6) + "src/*.ttf")
		.pipe(ttf2woff2())
		.pipe(dest(path.src.font[0].slice(0, -6)));
}

function ttf2woffConverter(){
	return gulp.src(path.src.font[0].slice(0, -6) + "src/*.ttf")
		.pipe(ttf2woff())
		.pipe(dest(path.src.font[0].slice(0, -6)));
}

function otf2ttf(){
	return src(path.src.font[0].slice(0, -6) + "src/*")
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest(path.src.font[0].slice(0, -6) + "src"));
}

module.exports = series(otf2ttf, ttf2woff2Converter, ttf2woffConverter);