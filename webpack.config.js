const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",

  output: {
    filename: "highcharts-bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "HighchartsBundler",
    libraryTarget: "umd",
    globalObject: 'typeof self !== "undefined" ? self : this', // ensures compatibility in both browser & Node
    chunkLoading: false,  // disable async chunks
  },

  target: ["web", "es5"], // ensure Webpack outputs ES5-compatible syntax

  module: {
    rules: [
      {
        test: /\.m?js$/,
        // Transpile your app code AND the highcharts package in node_modules
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/highcharts/es-modules")
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: [
                      "defaults",
                      "ie 11",
                      "last 2 versions",
                    ],
                  },
                  modules: false,
                  useBuiltIns: "usage",
                  corejs: 3,
                  bugfixes: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".js"],
  },

  optimization: {
    splitChunks: false,
    runtimeChunk: false,
    minimize: true,
  },

  devtool: false, // disable source maps for HtmlUnit safety
};
