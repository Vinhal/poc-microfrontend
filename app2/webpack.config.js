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
    historyApiFallback: true,
    port: 3002,
  },
  output: {
    publicPath: 'auto'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      filename: 'remoteEntry.js',
      exposes: {
        "./routes": "./src/app2routes",
      },
      remotes: {
        host: "host@http://localhost:3000/remoteEntry.js",
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
