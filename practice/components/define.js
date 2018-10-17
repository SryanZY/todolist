import Vue from 'vue'

const component = {
    template:
        `
            <div>
                <input type="text" v-model="text" />
                <p v-show="active">See me if is active</p>
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
    }
}

// 全局注册组件
// Vue.component('CompOne', component)

new Vue({
    el: '#root',
    components: {
        compOne: component
    },
    template: '<comp-one :activ="true"></comp-one>'
})
