const path = require('path')

// stop the build on linting error
const ESLintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // TODO: split prod and dev configs
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.json', '.js', '.css', '.less'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@scripts': path.resolve(__dirname, 'src/scripts'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@data': path.resolve(__dirname, 'src/data'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // potential use along with mini-css-extract-plugin for different envs
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.js$/i,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[name].[hash:4][ext]',
        },
        // if > maxSize, copy-plugin comes in
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash:3][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Interface Development',
      template: './public/index.html',
    }),
    new DefinePlugin({
      // quotes required
      BASE_URL: '"./"',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          // omit 'to', include globOptions
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new ESLintPlugin(),
  ],
  target: 'web',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
}
