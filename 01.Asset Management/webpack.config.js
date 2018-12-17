const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/'
    },
    module: {
        rules: [
            // process just css files
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // load images in 64 format
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            // fonts
            {
                test: /\.(woof|woof2|eot|ttf|otf)$/,
                use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]'
                            }
                        }
                    ]
            }, 
            // csv
            {
                test : /\.(csv|tsv)$/,
                use : [
                    'csv-loader'
                ]
            },
            // xml-loader
            {
                test: /\.xml$/,
                use : [
                    'xml-loader'
                ]
            }
        ]
    }
}