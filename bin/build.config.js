const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: {
    bundle : './src/main.js'
  },
  output: {
    filename: "main.js",
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/dist/',
  },
  plugins: [
    // new webpack.ProvidePlugin({
    // })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  }
};
