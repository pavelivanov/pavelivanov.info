import path from 'path'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'

import webpackConfig from './default'


webpackConfig.target = 'node'
webpackConfig.devtool = 'none'

webpackConfig.entry = {
  client: path.resolve('src/prod'),
}

webpackConfig.output = {
  path: path.resolve('build'),
  filename: '[name].js',
  publicPath: '/',
  libraryTarget: 'commonjs2',
}

webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve('src/index.html'),
    inject: false,
    minify: true,
  }),
  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1,
  }),
)

webpackConfig.optimization = {
  minimize: true,
  splitChunks: {
    chunks: 'all',
    maxAsyncRequests: 1,
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      },
    },
  },
  minimizer: [
    new TerserPlugin({
      sourceMap: true,
      parallel: 4,
    }),
    new OptimizeCSSAssetsPlugin(),
  ],
}


export default webpackConfig
