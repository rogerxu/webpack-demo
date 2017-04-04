import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';

export default {
  entry: {
    main: './app/index.js',
    vendor: ['lodash'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/', // webpack output is served from this path
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack',
      template: htmlWebpackTemplate,
      links: [
        '/css/bootstrap.min.css',
      ],
    }),
  ],
};
