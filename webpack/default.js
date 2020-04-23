import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import rulesMap from './rules'


const rules = Object.keys(rulesMap)
  .map((k) => rulesMap[k])
  .map((rule) => Array.isArray(rule) ? rule : (rule.default || rule[process.env.NODE_ENV]))
  .reduce((result, rule) => result.concat(rule), [])

const webpackConfig = {
  mode: process.env.NODE_ENV,
  target: 'web',
  module: {
    rules,
  },
  resolve: {
    extensions: [ '.js', '.ts', '.tsx', '.scss' ],
  },
  resolveLoader: {
    modules: [ 'node_modules' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('app/index.html'),
      inject: false,
      minify: false,
    }),
  ],
}


export default webpackConfig
