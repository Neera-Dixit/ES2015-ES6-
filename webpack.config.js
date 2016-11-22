var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './resources/js/script.js',
  output: { path: __dirname, filename: './resources/js/main.bundle.js' },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};