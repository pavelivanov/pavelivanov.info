import webpack from 'webpack'

import rulesMap from './rules'


const rules = Object.keys(rulesMap)
  .map((k) => rulesMap[k])
  .map((rule) => Array.isArray(rule) ? rule : (rule.default || rule[process.env.NODE_ENV]))
  .reduce((result, rule) => result.concat(rule), [])

const webpackConfig = {
  mode: process.env.NODE_ENV,
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/,
      /en-gb/
    ),
  ],
}


export default webpackConfig