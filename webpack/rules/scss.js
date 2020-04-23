import path from 'path'
import autoprefixer from 'autoprefixer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


const isDev           = process.env.NODE_ENV === 'development'
const onlyLocals      = process.env.WEBPACK === 'build.server'
const localIdentName  = isDev ? '[local]__[hash:base64:3]' : '[hash:base64:6]'
const loaders         = []

if (isDev) {
  loaders.push({
    loader: 'style-loader',
  })
}
else {
  loaders.push(MiniCssExtractPlugin.loader)
}

loaders.push(
  {
    loader: 'css-loader',
    options: {
      sourceMap: !isDev,
      onlyLocals: onlyLocals,
      importLoaders: 2,
      modules: {
        context: __dirname,
        localIdentName,
      },
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        autoprefixer([
          'last 2 versions',
          'Safari >= 9',
          'IE >= 11',
          'iOS >= 9',
        ]),
      ],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      prependData: '@import "./scss/index";',
      sassOptions: {
        includePaths: [
          path.resolve('app'),
        ],
      },      
    },
  }
)


export default [
  {
    test: /\.scss$/,
    use: loaders,
  },
]
