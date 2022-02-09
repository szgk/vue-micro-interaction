const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'umd',
    filename: 'index.js',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "sample"),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: '/node_modules/',
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
            loader: 'html-loader',
        }
      },
    ]
  },
  resolve: {
    extensions: ['.vue', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, '/src', 'index.html'),
    //   inject: 'body',
    // })
  ]
}