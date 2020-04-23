const config = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          browsers: [
            'last 2 versions',
            'Safari >= 9',
            'IE >= 11',
            'iOS >= 9',
          ],
          node: 'current',
        },
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
}


module.exports = config
