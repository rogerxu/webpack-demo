const path = require('path');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parts = require('./libs/parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
};

const devServerConfig = parts.devServer({
  host: process.env.HOST,
  port: process.env.PORT
});

const config = Object.assign({}, common);

for (let key of Object.keys(devServerConfig)) {
  if (key === "plugins") {
    config[key] = [...common.plugins, ...devServerConfig.plugins];
  } else {
    config[key] = devServerConfig[key];
  }
}

module.exports = validate(config);
