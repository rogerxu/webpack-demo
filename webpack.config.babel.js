import path from 'path';

export default {
  entry: ['./app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/', // webpack output is served from this path
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    compress: true,
  },
};
