const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './sample/app.js',
  output: {
    path: path.resolve(__dirname, "docs"),
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
          options:{
            presets: [
              '@babel/preset-env',
              // {
              //   modules: false,//commonjs,amd,umd,systemjs,auto
              //   useBuiltIns: 'usage',
              //   targets: {
              //     browsers: [
              //       "last 1 Chrome version",
              //       "last 1 Firefox version",
              //       "last 1 Edge version",
              //       "last 1 Safari version",
              //       "last 1 Opera version"
              //     ]
              //   },
              //   corejs: 3,
              //  }
            ],
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/sample', 'index.html'),
      inject: 'body',
    }),
  ]
}