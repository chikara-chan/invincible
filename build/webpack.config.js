const webpack = require('webpack'),
  path = require('path'),
  NODE_ENV = process.env.NODE_ENV,
  config = {
    context: path.resolve(__dirname, '..'),
    entry: {invincible: './src/index'},
    output: {
      path: './dist',
      filename: NODE_ENV === 'production' ? '[name].min.js' : '[name].js',
      library: 'Invincible',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {cacheDirectory: true}
      }]
    },
    resolve: {extensions: ['', '.js', '.json']},
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin()
    ]
  }

if (NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false},
    comments: false
  }))
}

module.exports = config
