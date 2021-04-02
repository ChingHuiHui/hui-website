module.exports = {
  publicPath: '/hui-website/',
  rules: [
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
}
