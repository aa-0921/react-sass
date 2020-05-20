const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/client/index.html',
  filename: './index.html'
});
module.exports = {
  entry: './src/client/index.tsx',
  resolve: {
    extensions: ['.ts','.tsx','.js']
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
}; 
