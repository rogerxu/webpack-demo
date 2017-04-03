import { isProd } from './config/util';
import webpackDev from './config/webpack.config.dev';
import webpackProd from './config/webpack.config.prod';

export default isProd ? webpackProd : webpackDev;
