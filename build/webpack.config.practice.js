// webpack配置客戶端代碼 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

let config
const defaultPlugins = [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'template.html')
    })
]
const devServer = {
    port: 8084,
    // host: '0.0.0.0',
    overlay: {
        errors: true
    },
    open: true,
    hot: true
}

config = merge(baseConfig, {
    entry: path.join(__dirname, '../practice/index.js'),
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.styl$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        }]
    },
    devServer,
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ])
})

module.exports = config
