const webpack = require('webpack'),
  path = require('path'),
  config = {
    context: path.resolve(__dirname, '..'),
    entry: {
      invincible: './src/index'
    },
    output: {
      path: './dist',
      filename: '[name].js',
      library: 'Invincible',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      }]
    },
    resolve: {
      extensions: ['', '.js', '.json']
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        comments: false
      })
    ]
  }

module.exports = config
