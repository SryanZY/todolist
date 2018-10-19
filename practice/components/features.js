import Vue from 'vue'

const childComponent = {
    template: `
        <div>child: {{ data.value }}</div>
    `,
    inject: ['yeye', 'data'], // 获取祖辈元素传递下来的数据
    mounted () {
        console.log(this.yeye, this.value)
    }
}

const component = {
    components: {
        childComponent
    },
    /* template: `
        <div :style="styles">
            <div class="header" style="color:#3ab"><slot name="header"></slot></div>
            <div class="header"><slot name="body"></slot></div>
        </div>
    `, */
    template: `
        <div :style="styles">
            <slot :value="value" aaa="ryan"></slot>
            <child-component></child-component>
        </div>
    `,
    data () {
        return {
            styles: {
                width: '200px',
                height: '200px',
                border: '1px solid #38f'
            },
            value: 'component value'
        }
    }
}

new Vue({
    el: '#root',
    components: {
        componentOne: component
    },
    provide () { // 向子组件们传递数据，不建议使用以后可能会取消
        const data = {}
        Object.defineProperty(data, 'value', {
            get: () => this.value,
            enumerable: true
        })

        return {
            yeye: this,
            data
        }
    },
    data () {
        return {
            value: '123'
        }
    },
    mounted () {
        console.log(this.$refs.comp, this.$refs.span)
    },
    template: `
        <component-one ref='comp'>
            <span slot-scope="props" ref='span'>This is header: {{ props.value }} {{ value }}</span>
        </component-one>
    `
    // slot-scope="props"称为作用于插槽，可以在调用时获取到子组件插槽传入的变量
})
