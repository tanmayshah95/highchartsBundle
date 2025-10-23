const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "highcharts-bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "HighchartsBundler",
    libraryTarget: "umd", // Works with RequireJS, Node, or browser global
    globalObject: "this"
  },
  mode: "production"
};
