<template>
  <div id="app">
    <div class="cover"></div>
    <Header></Header>
    <p>{{ count }} {{ fullName }}</p>
    <p>{{ textA }}</p>
    <router-link :to="{ name: 'app' }">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
        <router-view></router-view>
    </transition>
    <Footer></Footer>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    components: {
        Header,
        Footer
    },
    mounted () {
        let i = 1
        setInterval(() => {
            this.updateCount({
                num: i++,
                num2: 10
            })
        }, 2000)
        this.updateText(123)
        // this.updateCountAsync({
        //     num: 5,
        //     time: 2000
        // })
    },
    computed: {
        ...mapState({
            count: state => state.count,
            textA: state => state.a.text
        }),
        ...mapGetters(['fullName'])
    },
    methods: {
        ...mapActions(['updateCountAsync']),
        ...mapMutations(['updateCount', 'updateText'])
    }
}
</script>
<style lang="stylus" scoped>
    #app
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        .cover
            position fixed
            left 0
            top 0
            right 0
            bottom 0
            background-color rgba(153, 153, 153, .9)
            z-index -1
</style>
