const { src, dest } = require("gulp");
const { reload } = require("browser-sync");
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');

const isProd = require("./env");
const isDev = require("./env");

const { path } = require('../projectСonfig.json');

path.src.script[0] = path.src.srcPath + path.src.script[0];

path.dist.script = path.dist.distPath + path.dist.script;

const webpackConf = {
    mode: isDev() ? 'development' : 'production',
    devtool: isDev() ? 'eval-source-map' : false,
    optimization: {
        minimize: false
    },
    output: {
        filename: 'app.js',
    },
    module: {
        rules: []
    }
}

if(isProd()){
	webpackConf.module.rules.push({
		test: /\.(js)$/,
		exclude: /(node_modules)/,
		loader: 'babel-loader'
	});
}

module.exports = function script(){
    return src(path.src.script)
        .pipe(plumber())
        .pipe(webpackStream(webpackConf, webpack))
        .pipe(gulpif(isProd(), dest(path.dist.script)))
        .pipe(gulpif(isProd(), uglify()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(path.dist.script))
        .pipe(reload({stream: true}))
}