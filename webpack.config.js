var path = require('path'),
  webpack = require('webpack'),
  dvdep = require('./package.json').devDependencies,
  version = dvdep && dvdep.ticketmaster && dvdep.ticketmaster.replace(/[^0-9.]/,''),
  PROD = process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'prod',
  filename = 'ticketmaster-client-';

console.log('Version of bundled lib - %s', version);

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PROD ? [filename, version, '.min.js'].join('') : [filename , version, '.js'].join(''),
    library: "TMAPI" // global
  },
  devtool: PROD ? '' : '#cheap-module-inline-source-map',
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    PROD ? new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }) : new webpack.DefinePlugin({
      NODE_ENV: 'development'
    })
  ]
};