var webpack = require('webpack')
var path = require('path')

var VENDOR_LIBS = [
  'faker',
  'lodash',
  'react',
  'react-dom',
  'react-input-range',
  'react-redux',
  'react-router',
  'redux',
  'redux-form',
  'redux-thunk'
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/
    }, {
      use: ['style-loader', 'css-loader'],
      test: /\.css/
    }]
  }
}
