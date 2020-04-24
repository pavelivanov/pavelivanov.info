import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

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

webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve('app/index.html'),
    inject: 'body',
    minify: false,
  }),
)


export default webpackConfig
