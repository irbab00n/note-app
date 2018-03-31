const path = require('path');
const webpack = require('webpack');
const _public = path.join(__dirname, '/public');
const _client = path.join(__dirname, '/client');
const _modules = path.join(__dirname, '/node_modules');

module.exports = {
  devtool: 'source-map',

  entry: `${_client}/index.jsx`,

  output: {
    path: _public,
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(js||jsx)?/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
}