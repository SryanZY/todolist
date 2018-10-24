import * as types from './mutation-types'

const mutations = {
    // mutations中第二个参数是payload，所以必须是一个对象
    [types.updateCount] (state, { num, num2 }) {
        console.log(num2)
        state.count = num
    }
}

export default mutations
