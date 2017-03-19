module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: __dirname + '/src',
        exclude: __dirname + '/node_modules'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: __dirname + '/src/styles',
        exclude: __dirname + '/node_modules'
      },
    ]
  },
}