const { root } = require('./helpers');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin  = require("extract-text-webpack-plugin");

/**
 * This is a common webpack config which is the base for all builds
 */
module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('dist')
  },
  devtool: 'source-map',  
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['to-string-loader'].concat( ExtractTextPlugin.extract({
          use: ['raw-loader', 'sass-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          }] 
        })
      )},
      {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader',
        options: { name: './images/[name].[ext]' }
      },
      { test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'file-loader',
        options: { name: './fonts/[name].[ext]' }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
  ]

};
