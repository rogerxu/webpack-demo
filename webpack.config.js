const path = require('path');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./libs/parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'node_modules', 'purecss'),
    path.join(__dirname, 'app', 'main.css')
  ],
  images: path.join(__dirname, 'app', 'images'),
  fonts: path.join(__dirname, 'app', 'fonts'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app,
    style: PATHS.style
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loaders: ['postcss'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ],
  postcss: function() {
    return [
      require('stylelint'),
      require('precss'),
      require('autoprefixer')
    ];
  }
};

var config;

switch (process.env.npm_lifecycle_event) {
case 'build':
case 'stats':
  config = merge(
    common,
    {
      devtool: 'source-map',
      output: {
        path: PATHS.build,
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js'
      }
    },
    parts.clean(PATHS.build),
    parts.setFreeVariable(
      'process.env.NODE_ENV',
      'production'
    ),
    parts.extractBundle({
      name: 'vendor',
      entries: ['react']
    }),
    parts.minify(),
    parts.extractCSS(PATHS.style),
    parts.purifyCSS([PATHS.app]),
    parts.embedImage(PATHS.images),
    parts.loadFont(PATHS.fonts)
  );
  break;
default:
  config = merge(
    common,
    {
      devtool: 'eval-source-map'
    },
    parts.setupCSS(PATHS.style),
    parts.loadImage(PATHS.images),
    parts.loadFont(PATHS.fonts),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  );
}

module.exports = validate(config, {
  quiet: true
});
