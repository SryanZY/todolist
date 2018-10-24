// 可以理解为组件内的computed，可以用来处理后端返回的数据
export default {
    fullName (state) {
        return `${state.firstName} ${state.lastName}`
    }
}
