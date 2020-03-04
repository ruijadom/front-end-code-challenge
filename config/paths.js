const path = require('path');

module.exports = {
  // Webpack
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  templatePath: path.resolve(__dirname, '../', 'public/index.html'),
  faviconPath: path.resolve(__dirname, '../', 'public/favicon.ico'),
  outputScripts: 'scripts',
  outputStatic: 'static/media/'
};
