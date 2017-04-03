import path from 'path';
import webpack from 'webpack';

export default {
  entry: ['./app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/', // webpack output is served from this path
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
    new webpack.HotModuleReplacementPlugin(),
  ],
};
