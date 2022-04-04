const argv = require('yargs').argv;

const isDev = () => !argv.prod
 
const isProd = () => !!argv.prod;

module.exports = isDev
module.exports = isProd