const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/script/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'todo.js',
    },
    module: {
        rules: [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader",
                }
            },
            {
                test : /\.(scss|css)$/,
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    devtool: 'eval-source-map',
    devServer: {
        host: 'localhost',
        port: '7777',
        open: true,
    }
};