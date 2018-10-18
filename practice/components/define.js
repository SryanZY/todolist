import Vue from 'vue'

const component = {
    template:
        `
            <div>
                <input type="text" v-model="text" />
                <p v-show="active" @click="handleChange">See me if is active</p>
            </div>
        `,
    props: {
        active: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            text: 123
        }
    },
    methods: {
        handleChange () {
            this.$emit('change')
        }
    }
}

// 全局注册组件
// Vue.component('CompOne', component)

new Vue({
    el: '#root',
    data: {
        num: 0
    },
    components: {
        componentOne: component
    },
    template: '<component-one :active="true" @change="changeMyself"></component-one>',
    methods: {
        changeMyself () {
            this.num++
            console.log(this.num)
        }
    }
})
