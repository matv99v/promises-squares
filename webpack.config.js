var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    // 'babel-polyfill',
    './src/main'
  ],
  output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-0"],
        }
      }
    ]
  },
  // debug: true
};
