import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig from './webpack.config.base';

export default webpackMerge(baseConfig, {
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: [
      path.resolve(__dirname, '../public'),
    ],
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('[name].css'),
  ],
});
