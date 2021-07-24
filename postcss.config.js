module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: [
        'last 2 major versions',
        'not dead',
      ],
    }),
  ],
}
