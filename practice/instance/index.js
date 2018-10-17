import Vue from 'vue'

const app = new Vue({
    // el: '#root',
    template: '<div>{{ text }} + {{ obj.num }}</div>',
    data: {
        text: 'SryanZY',
        obj: {}
    }
})
app.$mount('#root') // 挂載，和el的方式效果完全一致

let i = 0
setInterval(() => {
    i++
    // app.obj.num = i
    // app.$forceUpdate() // vue是响应式更新，对于初始值为空的情况不会随着计时器更新，可以通过forceUpdate强制更新。但是容易造成内存泄漏所以不建议使用
    app.$set(app.obj, 'num', i) // 如果需要赋值操作，可以使用$set且不会造成内存泄漏，使用$delete删除操作。使用￥nextTick进行同步操作(常用)
}, 1000)

console.log(app.$root === app)
// 事件的注冊及触发
app.$on('textCompleted', (a, b) => {
    console.log(`emited, ${a} + ${b}`)
})
app.$emit('textCompleted', 1, 2)
