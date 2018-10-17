// webpack配置客戶端代碼 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

let config
const defaultPlugins = [
    new HtmlWebpackPlugin()
]
const devServer = {
    port: 8000,
    // host: '0.0.0.0',
    overlay: {
        errors: true
    },
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: {
        index: '/public/index.html'
    },
    proxy: {
        '/api': 'http://127.0.0.1:3333',
        '/user': 'http://127.0.0.1:3333'
    },
    open: true,
    hot: true
}

if (isDev) {
    config = merge(baseConfig, {
        devtool: '#cheap-module-eval-source-map',
        module: {
            rules: [
                {
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
                        {
                            loader: 'px2rem-loader',
                            options: {
                                remUnit: 75
                            }
                        },
                        'stylus-loader'
                    ]
                }
            ]
        },
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ])
    })
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js')
        },
        output: {
            filename: 'js/[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.styl/,
                    use: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
                }
            ]
        },
        plugins: defaultPlugins.concat([
            new MiniCssExtractPlugin({
                filename: 'css/styles.[name].css',
                chunkFilename: 'css/styles.[contenthash:8].css'
            })
        ]),
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            runtimeChunk: true
        }
    })
}

module.exports = config
