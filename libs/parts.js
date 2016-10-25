const webpack = require('webpack');

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
          loaders: ['style', 'css'],
          include: paths
        }
      ]
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
