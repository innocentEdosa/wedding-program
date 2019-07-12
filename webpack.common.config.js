const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|gif|jpeg|jpg|svg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ],
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    open: true,
    port: 7000,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'wedding program',
      template: './src/index.html',
      minify: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      }
    })
  ],
}