const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

exports.devServer = function(options) {
  return {
    watchOptions: {
      // delay the rebuild after the first change
      aggregateTimeout: 300,
      // poll using interval
      poll: 1000
    },
    devServer: {
      historyApiFallback: true,

      hot: true,
      inline: true,

      stats: 'errors-only',

      host: options.host,
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
};

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css', 'postcss'],
          include: paths
        }
      ]
    },
    postcss: function() {
      return [autoprefixer, precss];
    }
  }
};

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,

        comments: false,

        compress: {
          warnings: false,

          drop_console: true
        },

        mangle: {
          except: ['$'],

          screw_ie8: true,

          keep_fnames: true
        }
      })
    ]
  };
};

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
};

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
};

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  };
};

exports.extractCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css', 'postcss'),
          include: paths
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].[chunkhash].css')
    ],
    postcss: function() {
      return [autoprefixer, precss];
    }
  };
};

exports.purifyCSS = function(paths) {
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        paths: paths
      })
    ]
  };
};

exports.embedImage = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(jpg|png)$/,
          loader: 'url',
          query: {
            limit: 25000
          },
          include: paths
        }
      ]
    }
  };
};

exports.loadImage = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(jpg|png)$/,
          loader: 'file',
          query: {
            name: '[path][name].[hash].[ext]'
          },
          include: paths
        }
      ]
    }
  };
};
