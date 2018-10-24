import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'
import StoreFunction from './store/index'
import RouterFunction from './config/router'
import 'lib-flexible/flexible'
import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = RouterFunction()
const store = StoreFunction()
// 可以在跳转之前做一些判断和验证，next进行路由跳转。可用来判断登录状态
router.beforeEach((to, from, next) => {
    next()
    // if (to.fullPath === '/app') {
    //     next('/login')
    // } else {
    //     next()
    // }
})
router.beforeResolve((to, from, next) => {
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root')
