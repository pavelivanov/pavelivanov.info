import path from 'path'

import webpackConfig from './default'


webpackConfig.devtool = 'cheap-module-source-map'

webpackConfig.entry = {
  client: path.resolve('app/dev'),
}

webpackConfig.output = {
  path: path.resolve('build'),
  filename: '[name].js',
  chunkFilename: '[id].chunk.js',
  publicPath: '/',
}

webpackConfig.devServer = {
  stats: 'errors-only',
  publicPath: '/',
  noInfo: true,
  lazy: false,
}


export default webpackConfig
