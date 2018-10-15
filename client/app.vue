<template>
  <div id="app">
    <div class="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
    components: {
        Header,
        Footer,
        Todo
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
