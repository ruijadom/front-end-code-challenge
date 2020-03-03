const path = require('path');

module.exports = {
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  publicDevPath: '0.0.0.0',
  publicProdPath: 'https://ruijadom.github.io/front-end-code-challenge'
};
