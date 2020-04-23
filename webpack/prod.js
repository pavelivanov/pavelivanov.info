import webpack from 'webpack'
import basePath from 'base-path'
import TerserPlugin from 'terser-webpack-plugin'
import AssetsPlugin from 'assets-webpack-plugin'
import { ReactLoadablePlugin } from 'react-loadable/webpack'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import NamedChunks from 'local_modules/named-chunks'
import BundleAnalyzer from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'

import webpackConfig from './default'


const globals = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
}

const output = basePath('build')


webpackConfig.target = 'web'
webpackConfig.devtool = 'source-map'

webpackConfig.entry = {
  client: basePath('site/index'),
}

webpackConfig.output = {
  path: output,
  filename: 'js/[name].[chunkhash].js',
  chunkFilename: 'js/[id].[chunkhash].chunk.js',
  publicPath: '/assets/',
}

webpackConfig.plugins.push(
  new NamedChunks(),
  new webpack.DefinePlugin(globals),
  new ReactLoadablePlugin({
    filename: basePath('build/loadableAssets.json'),
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[id].[contenthash].css',
    ignoreOrder: true,
  }),
  new AssetsPlugin({
    path: output,
    filename: 'assets.json',
    fullPath: false,
    update: true,
    prettyPrint: true,
  }),
  new CopyPlugin([
    {
      from: basePath('site/assets'),
      to: basePath('build'),
    },
  ]),
  // new BundleAnalyzer.BundleAnalyzerPlugin({
  //   // Can be `server`, `static` or `disabled`.
  //   // In `server` mode analyzer will start HTTP server to show bundle report.
  //   // In `static` mode single HTML file with bundle report will be generated.
  //   // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
  //   analyzerMode: 'server',
  //   // Host that will be used in `server` mode to start HTTP server.
  //   analyzerHost: '127.0.0.1',
  //   // Port that will be used in `server` mode to start HTTP server.
  //   analyzerPort: 8888,
  //   // Path to bundle report file that will be generated in `static` mode.
  //   // Relative to bundles output directory.
  //   reportFilename: 'report.html',
  //   // Module sizes to show in report by default.
  //   // Should be one of `stat`, `parsed` or `gzip`.
  //   // See "Definitions" section for more information.
  //   defaultSizes: 'parsed',
  //   // Automatically open report in default browser
  //   openAnalyzer: true,
  //   // If `true`, Webpack Stats JSON file will be generated in bundles output directory
  //   generateStatsFile: false,
  //   // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
  //   // Relative to bundles output directory.
  //   statsFilename: 'stats.json',
  //   // Options for `stats.toJson()` method.
  //   // For example you can exclude sources of your modules from stats file with `source: false` option.
  //   // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
  //   statsOptions: null,
  //   // Log level. Can be 'info', 'warn', 'error' or 'silent'.
  //   logLevel: 'info',
  // }),
)

webpackConfig.optimization = {
  minimize: true,
  splitChunks: {
    chunks: 'all',
    maxAsyncRequests: 1,
    // maxInitialRequests: Infinity,
    cacheGroups: {
      npm: {
        test: /node_modules/,
        enforce: true,
        name: (module) => {
          if (/custom-select/.test(module.context)) {
            return 'custom-select'
          }
          if (/react-helmet/.test(module.context)) {
            return 'react-helmet'
          }
          if (/axios/.test(module.context)) {
            return 'axios'
          }
          if (/@sentry/.test(module.context)) {
            return 'sentry'
          }
          if (/react-dom/.test(module.context)) {
            return 'react-dom'
          }
          if (/react-window/.test(module.context)) {
            return 'react-window'
          }
          if (/react/.test(module.context)) {
            return 'react'
          }

          return 'npm'
        },
      },
      loc: {
        test: /local_modules/,
        enforce: true,
        name: 'loc',
      },
      components: {
        chunks: 'async',
        test: /components/,
        enforce: true,
        name: 'components',
      },
      styles: {
        test: /\.css$/,
        name: 'styles',
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
