const path = require('path');
const packageJSON = require('../package.json');

module.exports = {
  // Webpack
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  // publicPath
  publicDevPath: '/',
  publicProdPath: packageJSON.homepage
};
