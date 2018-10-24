export default {
    updateCountAsync (context, data) {
        setTimeout(() => {
            context.commit('updateCount', {
                num: data.num
            })
        }, data.time)
    }
}
