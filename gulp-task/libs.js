const { src, dest  } = require("gulp");
const { reload } = require("browser-sync");

const { path } = require('../projectСonfig.json');

path.src.libs[0] = path.src.srcPath + path.src.libs[0];
path.src.libs[1] = "!" + path.src.libs[0].slice(0, -6) + "src/*.*";

path.dist.libs = path.dist.distPath + path.dist.libs;

module.exports = function libs() {
    return src(path.src.libs)		
        .pipe(dest(path.dist.libs))
        .on('end', reload);
};