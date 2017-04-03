import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.config.base';

export default webpackMerge(baseConfig, {
  devtool: 'cheap-eval-source-map',
  devServer: {
    compress: true,
    hot: true,
  },
});
