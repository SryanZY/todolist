import Vue from 'vue'

// 和数据相关的方法或者函数调用可以放在created或者mounted中，但是涉及DOM节点的操作只能放在mounted中
const app = new Vue({
    // template: '<div>{{ text }}</div>',
    data: {
        text: 'SryanZY'
    },
    beforeCreate () {
        console.log(this, 'beforeCreate')
    },
    created () {
        console.log(this, 'created')
    },
    beforeMount () { // 挂载之前,<div id="root"></div>
        console.log(this.$el, 'beforeMount')
    },
    mounted () { // 挂载完成, <div></div>
        console.log(this.$el, 'mounted')
    },
    beforeUpdate () {
        console.log(this, 'beforeUpdate')
    },
    updated () {
        console.log(this, 'updated')
    },
    activated () {
        console.log(this, 'activated')
    },
    deactivated () {
        console.log(this, 'deactivated')
    },
    beforeDestroy () {
        console.log(this, 'beforeDestroy')
    },
    destroyed () {
        console.log(this, 'destroyed')
    },
    // 在beforeMount和mounted生命周期之间执行，render方法的第二个参数是data、props之类的属性，第三个参数是DOM节点的内容
    render (h) {
        return h('div', {}, this.text)
    },
    // 只在开发时使用且只适用于本组件，不包括子组件
    renderError (h, err) {
        return h('div', {}, err.stack)
    },
    errorCaptured () {
        // 会向上冒泡且可在正式环境中使用
    }
})

app.$mount('#root')
