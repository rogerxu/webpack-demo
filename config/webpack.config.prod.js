import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import WebpackChunkHash from 'webpack-chunk-hash';

import baseConfig from './webpack.config.base';

export default webpackMerge(baseConfig, {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
    }),
  ],
});
