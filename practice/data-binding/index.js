import Vue from 'vue'

const app = new Vue({
    template: `<div @click="handleClick" :class="{ active: !isActive }" :style="[style1, style2]">{{ isActive ? 'active' : 'inActive' }}</div>`,
    data: {
        text: 'SryanZY',
        isActive: false,
        style1: {
            color: '#38f',
            fontSize: '18px',
            appearance: 'none' // 消除浏览器默认的样式
        },
        style2: {
            textDecoration: 'line-through'
        }
    },
    methods: {
        handleClick () {
            console.log('clicked')
        }
    }
})

app.$mount('#root')
