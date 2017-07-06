const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const script = process.env.npm_lifecycle_event;
const isTest = script === 'test' || script === 'test-watch';
const isProd = script === 'build';
const isDev = !isTest && !isProd;

const include = [
  path.resolve(__dirname, 'src')
];

// Phaser webpack config
let phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
let phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
let pixi = path.join(phaserModule, 'build/custom/pixi.js');
let p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = function() {
  let config = {};

  config.entry = path.resolve(__dirname, 'src', 'index.js');
  config.output = {
    path: path.resolve(__dirname, isProd ? 'dist' : 'src'),
    filename: '[name].js',
    publicPath: '/'
  };

  if (isProd) {
    config.devtool = 'source-map';
  }

  // vue.js npm package is runtime-only - use the dist version to get the compiler
  config.resolve = {
    extensions: ['.js', '.scss', '.html'],
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  };

  config.cache = true;

  config.module = {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] }    ]
  };

  config.plugins = [];

  if (!isTest) {
    config.plugins.push(
        new HtmlWebpackPlugin({
          template: 'src/index.ejs',
          isDev,
          isProd
        })
    );
  }

  config.devServer = {
    contentBase: './src',
    historyApiFallback: {
      index: 'src/index.html'
    },
    port: 8080
  };

  return config;
}();