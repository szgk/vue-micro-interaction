const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'umd',
    filename: 'index.js',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
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
    new CleanWebpackPlugin({
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      // Do not allow removal of current webpack assets
      protectWebpackAssets: true,
    }),
  ]
}