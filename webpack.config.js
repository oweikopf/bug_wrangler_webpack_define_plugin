const webpack = require('webpack');

module.exports = {
    target: 'webworker',
    context: __dirname,
    entry: './src/index.js',
    mode: 'development',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins:[
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('5fa3b9')
        })
    ]

}