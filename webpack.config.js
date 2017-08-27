var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/main.js'
  ],

  output: {
    filename: 'scripts/main.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/scripts/',
  },

  devtool: 'source-map',

  module: {
    loaders: [{
        test: /\.scss$/,
        use : ExtractTextPlugin.extract(
          [
            'css-loader?sourceMap',
            'sass-loader?sourceMap'
          ]
        )
      },
      {
        test: /\.js?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'styles/[name].css',
      allChunks: true,
    }),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  devServer: {
    host: 'localhost',
    contentBase: './',
    port: 8080,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
