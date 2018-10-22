import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import RouterFunction from './config/router'
import 'lib-flexible/flexible'
import './assets/styles/global.styl'

Vue.use(VueRouter)

const router = RouterFunction()
// 可以在跳转之前做一些判断和验证，next进行路由跳转。可用来判断登录状态
router.beforeEach((to, from, next) => {
    console.log('before each')
    next()
    // if (to.fullPath === '/app') {
    //     next('/login')
    // } else {
    //     next()
    // }
})
router.beforeResolve((to, from, next) => {
    console.log('before resolve')
    next()
})
router.afterEach((to, from) => {
    console.log('after')
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#root')
