module.exports = {
  entry:
    './src/index.js'
  ,
  output: {
    path: __dirname+'/src',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015','stage-1', 'stage-2'],
        plugins: ["transform-decorators-legacy"]
      }
    },
    {
      test: /\.css$/,
      loaders:["style", "css"]
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
