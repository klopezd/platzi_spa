const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // copy plugin

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //donde se encuentre vas a crear la carpeta dist de distribution
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    //babel module to make the app compatibel with all browsers
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    //webpack-plugin de html que nos permite trabajar con los archivos html
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html', //template principal
                filename: './index.html', //hacia donde tenemos que mandar o guardar
            }
        ),
        new CopyWebpackPlugin([{
            from: './src/styles/styles.css',
            to: ''
        }])
    ]
}