import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


const isDev = process.env.NODE_ENV === 'development'
const localIdentName = isDev ? '[local]_[hash:base64:4]' : '[hash:base64:6]'

const loaders = [{
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: process.env.ASSETS_PATH,
  },
}]

loaders.push(
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName,
        exportOnlyLocals: false,
      },
      importLoaders: 2,
      sourceMap: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      additionalData: '@import "scss/index";',
      sassOptions: {
        includePaths: [
          path.resolve('src'),
        ],
      },
      sourceMap: true,
    },
  }
)


export default [
  {
    test: /\.scss$/,
    use: loaders,
  },
]
