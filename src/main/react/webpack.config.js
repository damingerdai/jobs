const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.tsx"),
    polyfills: path.resolve(__dirname, "./src/polyfills.ts"),
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[id].[chunkhash].chunk.js",
    path: path.resolve(__dirname, "./dist"),
  },
  optimization: {
    runtimeChunk: 'single',
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'babel-loader',
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    // contentBase: "build",
    port: 3000,
    index: "index.html",
    open: true,
    openPage: "",
    inline: true,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    disableHostCheck: false,
    writeToDisk: false,
    transportMode: "ws",
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8443",
        // pathRewrite: { "^/proxy": "" },
        changeOrigin: true,
      },
    },
  },
  optimization: {
    splitChunks: {
      name: 'vendors',
      chunks: "all",
    },
    runtimeChunk: {
      name: "runtime",
    },
  },
};
