const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config =  {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'js/bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        /**
         * 使用vue或者react框架时尽量使用
         */
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlWebpackPlugin()
    ]
}

/**开发环境下的配置补充 */
if (isDev) {
    config.module.rules.push(
        {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        /*让postcss-loader使用stylus传过来的sourceMap,
                            提高构建速度
                         */
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        }
    )
    config.devtool = '#eval'
    config.devServer = {
        port: 8003,
        /**便于调试，可在手机或者通过其他IP访问 */
        host: '127.0.0.1',
        /*将error显示在浏览器中 */
        overlay: {
            errors: true
        },
        open: true,
        hot: true  
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    }
    config.output.filename = 'js/[name].[chunkhash:8].js'
    config.module.rules.push(
        {
            test: /\.styl$/,
            use: ExtractPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    )
    config.plugins.push(
        new CleanWebpackPlugin(['dist']),
        new ExtractPlugin('css/styles.[contenthash:8].css'),
        new UglifyJSPlugin (),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'runtime']
        })
    )
}

module.exports = config;