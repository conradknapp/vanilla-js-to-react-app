module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },
  mode: "development"
};
