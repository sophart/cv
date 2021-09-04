const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const postcssPresetEnv = require("postcss-preset-env");
module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: {
    main: "./src/js/app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          // { loader: "style-loader" },
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
