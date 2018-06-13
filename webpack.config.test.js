const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./test/index.jsx'],
  output: {
    filename: 'script/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.jsx$|\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
      inject: true,
    }),
  ],
};
