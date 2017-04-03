import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: {
    main: './app/index.js',
    vendor: 'lodash',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/', // webpack output is served from this path
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
    ],
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
  ],
};
