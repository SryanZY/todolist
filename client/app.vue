<template>
  <div id="app">
    <div class="cover"></div>
    <Header></Header>
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

export default {
    components: {
        Header,
        Footer
    },
    mounted () {
        console.log(this.$route)
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
