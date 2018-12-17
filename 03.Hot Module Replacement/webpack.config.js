const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWepackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), 
        publicPath: '/'
    }, 
    // this option can track the error in the different bundles that you have
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist', 
        hot: true
    },
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWepackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]
}