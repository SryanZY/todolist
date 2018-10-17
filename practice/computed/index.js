import Vue from 'vue'

new Vue({
    el: '#root',
    template: '<div>{{ name }}<p>FirstName: <input type="text" v-model="firstName"/></p> <p>{{ fullName }}</p></div>',
    data: {
        firstName: 'SryanZY',
        lastName: 'jokey',
        fullName: ''
    },
    // 响应式更新
    computed: {
        name () {
            return `${this.firstName} ${this.lastName}`
        }
    },
    // 监听到某一数据的变化
    watch: {
        firstName (newName, oldName) {
            this.fullName = newName + oldName
        },
        fullName: {
            handler (newVal, oldVal) {
                console.log('changed')
            },
            immediate: true,
            deep: true // 深度监控，包括挂载在元素上的属性，通常开销比较大
        }
    }
})
