var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry : './app/index.js',
  output : {
    path : path.resolve(__dirname , 'dist'),
    filename: 'index_bundle.js'
  },
  module : {
    rules : [
      {test : /\.(js)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']},
      {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
    ]
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
        template : 'app/index.html'
    })
  ]

}