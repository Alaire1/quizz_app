const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js'
    },
    optimization: {
        minimize: false
    },

    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.jsx?$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // Add the new rule for image files
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/', // This is where your images will be placed in the build folder
                        },
                        
                    },
                ],
            },
        ],
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
};
