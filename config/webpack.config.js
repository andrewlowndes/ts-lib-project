const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.umd.js',
    path: path.resolve(__dirname, './../lib'),
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, 'webpack.tsconfig.json')
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  }
};
