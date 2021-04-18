const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

/**@type{import('webpack').Configuration} */
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map", //Used to map bundle to source code
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development mode",
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
};
