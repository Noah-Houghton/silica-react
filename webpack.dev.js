const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';
module.exports = {
    entry: resolveAppPath('example/index.ts'),
    mode: "development",
    devServer: {
        host,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({inject: true, template: resolveAppPath('example/public/index.html')}),
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            "buffer": false,
            "https": false,
            "http": false,
            "url": false,
            "querystring": false,
            "path-browserify": false,
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};