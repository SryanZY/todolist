import Vue from 'vue'

new Vue({
    el: '#root',
    template:
    `
        <div>
            <p v-html="html"></p>
        </div>
    `,
    data: {
        html: '<span style="color:#38f;font-size:16px;">loader</span>'
    }
})
