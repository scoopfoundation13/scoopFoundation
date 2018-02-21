var webpack = require('webpack');
var baseConfig = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      EMAIL_USER: "",
      EMAIL_PASS: "",
      EMAIL_HOST: 'smtp.ethereal.email',
      EMAIL_PORT: 587,
      EMAIL_SECURE: false, // true for 465, false for other ports
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
