import Vue from 'vue'

const component = {
    template: `
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
    },
    mounted () {
        console.log('component')
    }
}
// 继承自component
const component2 = {
    extends: component,
    data () {
        return {
            text: 123
        }
    },
    mounted () {
        console.log(this.$parent.$options.name) // 返回调用该组件的父组件，也可以通过this.$parent修改父组件中的定义，不过不建议
    }
}
new Vue({
    name: 'firstName',
    el: '#root',
    components: {
        component2
    },
    template: '<component2 :active="true"></component2>'
})

// 相当于继承了component组件
/* const CompVue = Vue.extend(component)
new CompVue({
    el: '#root',
    propsData: { // 相当于子组件props中的属性
        active: true
    },
    data: { // 会覆盖父组件的data
        text: 'SryanZY'
    },
    mounted () {
        console.log('component open')
    }
}) */
