const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./app.js",
    vendor: ["mithril"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader"}
    ]
  },
  resolve: {
    extensions: ["", ".js", ".json"]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
      __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ]
};
