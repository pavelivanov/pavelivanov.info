import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'

import webpackConfig from '../../webpack/dev'


const compiler = webpack(webpackConfig)
const app = express()

app.use(webpackMiddleware(compiler, webpackConfig.devServer))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(5000, () => {
  console.log('App running on localhost:5000')
})
