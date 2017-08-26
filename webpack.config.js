var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = {
  entry: {
    reactHotLoader: 'react-hot-loader/patch',
    webpackDevServer: 'webpack-dev-server/client?http://localhost:8080',
    webpackOnlyDevServer: 'webpack/hot/only-dev-server',
    main: './client/main.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'static/scripts/',
  },

  devtool: 'inline-source-map',

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
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
      new InlineManifestWebpackPlugin({
  		name: 'webpackManifest'
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
    port: 8080,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
