var webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    new webpack.EnvironmentPlugin({
      STRIPE_SECRET_LIVE: 'sk_test_QTamMeyXOnN2cYetGobSFaUg', // uses STRIPE_SECRET_TEST unless process.env.STRIPE_SECRET_LIVE is defined
      STRIPE_PUBLIC_LIVE:  'pk_test_gEsCjsC0yW16GWsuLkaTSfyX' // uses STRIPE_PUBLIC_TEST unless process.env.STRIPE_PUBLIC_LIVE is defined
    })
  ]

}
