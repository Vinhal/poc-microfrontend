const Webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = Webpack.container.ModuleFederationPlugin;

const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: 'remoteEntry.js',
      exposes: {
        "./useUserContext": "./src/UserContext/useUserContext",
      },
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
