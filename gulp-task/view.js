const { src, dest  } = require("gulp");
const fileInclude = require("gulp-file-include");
const browserSync = require("browser-sync");

const { path } = require('../projectСonfig.json');

path.src.html[0] =  path.src.srcPath + path.src.html[0];
path.src.html[1] =  "!" + path.src.html[0].slice(0, -6) + "_*.html";
path.src.html[2] =  "!" + path.src.srcPath + "/assets";
path.src.html[3] =  "!" + path.src.srcPath + "/_html";

path.dist.html = path.dist.distPath + path.dist.html;

module.exports = function view() {
    return src(path.src.html)
        .pipe(fileInclude({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(dest(path.dist.html))
        .on('end', browserSync.reload)
}