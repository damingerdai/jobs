const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../resources/static')
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        // contentBase: "build",
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
            "/proxy": {
                target: "http://127.0.0.1",
                pathRewrite: { "^/proxy": "" },
                changeOrigin: true
            }
        }
    }
}