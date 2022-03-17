const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    filename: ["./components/index.ts"]
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].min.js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../components')
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [path.resolve(__dirname, '../components')],
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }]
    }, {
      test: /\.less?$/,
      include: [path.resolve(__dirname, '../components')],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
           modules: false,
          }
        },
        'less-loader',
        'postcss-loader'
      ]
    }]
  },
};
