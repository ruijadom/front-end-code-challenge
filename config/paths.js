const path = require('path');

module.exports = {
  // Webpack
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  // HOST
  publicDevPath: '0.0.0.0',
  publicProdPath: 'https://ruijadom.github.io/front-end-code-challenge',
  // PORT
  port: '8081'
};
