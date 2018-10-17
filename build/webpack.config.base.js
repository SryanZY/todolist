/* webpack配置公用代碼 */
const path = require('path')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    mode: process.env.NODE_ENV || 'production', // development || production
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'js/bundle.[hash:8].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // vue-loader14中的配置，15中已修改
                options: {
                    preserveWhitepace: true,
                    cssModules: {
                        localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
                        camelCase: true
                    }
                    /* loaders: {
                        css: ['vue-style-loader', 'css-loader', 'postcss-loader', 'px2rem-loader'],
                        stylus: ['vue-style-loader', 'css-loader', 'postcss-loader', 'px2rem-loader', 'stylus-loader']
                    } */
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'resources/[name].[hash:8].[ext]'
                    }
                }]
            }
        ]
    }
}

module.exports = config
