const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: {
    js: "./app.js",
    html: "./index.html",
    vendor: ["mithril"]
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".json"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  devServer: {
    contentBase: "./src",
    hot: true
  }
};
