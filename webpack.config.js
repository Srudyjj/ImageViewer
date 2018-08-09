const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js',
      './index.html',
      './style.css'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'stage-0']
      }
    },
    {
      test: /\.html?$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: false
        }
      }]
    },
    {
      test: /\.css?$/,
      use: [
        {
          loader: "restyle-loader"
        },
        {
          loader: "file-loader",
          options: {
            name: "[name].css?[hash:8]"
          }
        }
      ]
    },  
    ]
  }
}