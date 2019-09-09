/**
 * 作者: qq2575896094
 * 日期: 2019/9/9
 */

const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATH = path.resolve(__dirname, './src');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.[hash:8].js",
        path: path.resolve(__dirname, './dist')
    },
    externals: [],
    module: {
        rules: [
            {
                test: /\.css$/,
                include: APP_PATH,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                include: APP_PATH,
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            title: 'react cli for webpack',
            minify: {
                collapseWhitespace: true,
            },
            favicon: "src/favicon.ico"
        })
    ],
    devServer: {

    }
};
