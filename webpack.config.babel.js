import path from 'path';

export default {
  entry: ['./app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/,
        ],
      },
    ],
  },
};
