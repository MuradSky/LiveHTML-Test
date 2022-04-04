const { src, dest  } = require("gulp");
const { reload } = require("browser-sync");

const { path } = require('../projectСonfig.json');

path.src.font[0] = path.src.srcPath + path.src.font[0];
path.src.font[1] = "!" + path.src.font[0].slice(0, -6) + "src/*.*";

path.dist.font = path.dist.distPath + path.dist.font;

module.exports = function font() {
    return src(path.src.font)		
        .pipe(dest(path.dist.font))
        .on('end', reload);
};