const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const WebpackBar = require("webpackbar");

module.exports = {
  mode: 'development',
  entry: {
    indexTs: {
      import: paths.appTs,
    },
  },
  output: {
    path: paths.dist,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: paths.dist,
    },
    compress: false,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          'postcss-loader',
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html',
    }),
    new WebpackBar(),
  ],
};
