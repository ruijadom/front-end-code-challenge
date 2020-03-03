const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonPaths = require('./config/paths');

module.exports = function(_env, argv) {
  // define HOST
  const HOST = argv.HOST;

  const isProduction = argv.mode === 'production';
  const isDevelopement = !isProduction;

  argv.HOST = isDevelopement ? commonPaths.publicDevPath : commonPaths.publicProdPath;
  argv.PORT = commonPaths.PORT;
};
