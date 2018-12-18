const path = require('path')
const CleanWepackPlugin = require('clean-webpack-plugin')

module.exports = {
  
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }, 
    mode: 'development',
    // this option can track the error in the different bundles that you have
    devtool: 'inline-source-map',
    optimization :{
        usedExports : true
    },
    plugins : [
        new CleanWepackPlugin(['dist'])
    ]

}