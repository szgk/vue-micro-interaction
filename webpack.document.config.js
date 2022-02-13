const path = require('path')
const webpack = require("webpack")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {

  const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/document', 'index.html'),
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      WEBPACK_MODE: JSON.stringify(argv.mode),
    }),
  ]

  // clear docs/ dir, only when building.
  if(argv.env.WEBPACK_BUILD) {
    plugins.push(
      new CleanWebpackPlugin({
        // Write Logs to Console
        verbose: true,
        // Automatically remove all unused webpack assets on rebuild
        cleanStaleWebpackAssets: true,
        // Do not allow removal of current webpack assets
        protectWebpackAssets: true,
      })
    )
  }

  return {
    entry: './document/app.js',
    output: {
      path: path.resolve(__dirname, "docs"),
      libraryTarget: 'umd',
      filename: (pathData) => {
        return pathData.chunk.name === 'main' ? 'app.js' : '[name].js';
      },
      globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'initial',
      }
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "document"),
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
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
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
      alias: {
        process: "process/browser"
      }
    },
    plugins,
  }
}
