module.exports = (isDev) => {
    return {
        preserveWhitepace: true, // 消除vue模板中空格的影响
        extractCSS: !isDev,
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        }
    }
}
