const del = require("del");

const { path } = require('../projectСonfig.json');

module.exports = function clean(){
	return del([path.dist.distPath]);
}