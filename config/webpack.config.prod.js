import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.config.base';

export default webpackMerge(baseConfig, {
  output: {
    filename: '[name].[chunkhash].bundle.js',
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ],
});
