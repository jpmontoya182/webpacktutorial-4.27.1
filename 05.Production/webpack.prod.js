const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: "production",
    // optional. Is recommend to debug in production
    devtool: 'source-map'
})