const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForSass = {
  test: /\.s[ac]ss$/i,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const rulesForJavascript = {
  test: [/\.js$/, /\.jsx$/],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic", // classic
        },
      ],
    ],
  },
};

const rules = [rulesForJavascript, rulesForSass];

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  module: {
    rules,
  },
  devServer: {
    open: true,
  },
};
