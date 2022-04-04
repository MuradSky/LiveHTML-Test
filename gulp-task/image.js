const { src, dest, series } = require("gulp");
const { reload } = require("browser-sync");
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require("imagemin-jpeg-recompress");
const newer = require('gulp-newer');
const pngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');
const svg = require("gulp-svg-sprite");

const { path } = require('../projectСonfig.json');

path.src.image[0] = path.src.srcPath + path.src.image[0];
path.src.image[1] = "!" + path.src.image[0].slice(0, -6) + "svgIcons/*.svg";

path.dist.image = path.dist.distPath + path.dist.image;

// Image min
 function imageMin(){
    return src(path.src.image)
        .pipe(newer(path.dist.image))
        .pipe(imagemin([
            
            imageminJpegRecompress({
                progressive: true,
                min: 70, max: 75
            }),

            pngquant({
                speed: 5,
                quality: [0.6, 0.8]
            }),

            imagemin.svgo({
                plugins: [
                        { removeViewBox: false },
                        { removeUnusedNS: false },
                        { removeUselessStrokeAndFill: false },
                        { cleanupIDs: false },
                        { removeComments: true },
                        { removeEmptyAttrs: true },
                        { removeEmptyText: true },
                        { collapseGroups: true }
                ]
            })

        ]))
        .pipe(dest(path.dist.image))
}

// Sprite svg
function sprite() {
    return src("./src/assets/img/svg/*.svg")
        .pipe(svg({
            shape: {
                dest: "intermediate-svg"
            },
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(dest("./dist/assets/img/sprites/"))
}

// Webp
function webConverter(){
    return src(path.dist.image + '**/*.{png,jpg,jpeg}')
		.pipe(webp())
		.pipe(dest(path.dist.image))
}

module.exports = series(imageMin, webConverter, sprite, (done) => {reload(); done();});