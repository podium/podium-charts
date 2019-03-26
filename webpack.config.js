const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // FIXME: consider importing the config file instead
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['transform-class-properties']
          }
        },
        resolve: {
          extensions: ['.js', '.jsx']
        }
      },
      {
        // NOTE: This engineers around a problem with the podium-ui build,
        // where SVGs are not being loaded and transformed into JS.
        // TODO: Fix the issue in podium-ui's build process, and remove this loader.
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};
