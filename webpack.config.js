const webpack = require("webpack");

const config = {
  entry: "./app.js",
  output: {
    path: ".",
    filename: "bundle.js"
  },
  node: {
    console: true,
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};

module.exports = config;
