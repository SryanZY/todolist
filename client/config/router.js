import Router from 'vue-router'
import routes from './routes'

// 返回一个函数适用于服务端渲染，若直接返回一个router对象会造成内存溢出
export default () => {
    return new Router({
        mode: 'history',
        // base: '/base/' 基路径
        routes,
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'extract-active-link',
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) return savedPosition
            else return { x: 0, y: 0 }
        },
        fallback: true
        // 若浏览器不支持history形式vue自动处理
        /* parseQuery () {

        },
        stringifyQuery () {

        } */
    })
}
