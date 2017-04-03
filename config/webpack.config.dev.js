import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.config.base';

export default webpackMerge(baseConfig, {
  devtool: 'cheap-eval-source-map',
  devServer: {
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
