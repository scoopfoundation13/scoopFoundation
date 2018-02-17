var webpack = require('webpack');
var baseConfig = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: 'babel-loader?presets[]=es2015&presets[]=react' 
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      STRIPE_SECRET_LIVE: 'sk_test_QTamMeyXOnN2cYetGobSFaUg', // uses STRIPE_SECRET_TEST unless process.env.STRIPE_SECRET_LIVE is defined
      STRIPE_PUBLIC_LIVE:  'pk_test_gEsCjsC0yW16GWsuLkaTSfyX' // uses STRIPE_PUBLIC_TEST unless process.env.STRIPE_PUBLIC_LIVE is defined
    })
  ]
}
/*
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true), // if (PRODUCTION) { console.log('Production log'); }
      VERSION: JSON.stringify("5fa3b9") // console.log("Running App version " + VERSION);
    })
*/

if (process.env.NODE_ENV === "production") {
  baseConfig.plugins.push( new webpack.optimize.UglifyJsPlugin({minimize: true}) );
}

module.exports = baseConfig;
