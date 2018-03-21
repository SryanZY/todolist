<!-- tab切换，过滤条件部分 -->
<template>
  <div class="helper">
      <spam class="left">{{unFinishedTodoLength}} items left</spam>
      <span class="tabs">
          <span 
            v-for="state in states" 
            :key="state"
            :class="[state, filter === state ? 'actived' : '']"
            @click="toggleFilter(state)"
          >
              {{state}}
          </span>
      </span>
      <span class="clear" @click="clearCompleted">Clear All Completed</span>
  </div>
</template>

<script>
export default {
  props: {
      filter: {
          type: String,
          required: true
      },
      todos: {
          type: Array,
          required: true
      }
  },
  data () {
    return {
        states: ['all', 'active', 'completed']
    };
  },
  computed: {
      unFinishedTodoLength () {
          return this.todos.filter(todo => !todo.completed).length;
      }
  },
  methods: {
      toggleFilter (state) {
         this.$emit('toggle', state) 
      },
      clearCompleted () {
          this.$emit('clearAllCompleted')
      }
  }
}
</script>
<style lang="stylus" scoped>
    .helper
        display flex
        justify-content space-between
        padding 5px 10px
        line-height 30px
        font-weight 100
        background-color #fff
        font-size 14px
        font-smoothing: antialiased
        .left
            text-align left
        .tabs
            width 200px
            display flex
            justify-content space-around
            * 
                display inline-block
                padding 0 10px
                box-sizing border-box
                cursor pointer
                border 1px solid rgba(175,47,47,0)
                &.actived
                    border-color rgba(175,47,47,0.4)
                    border-radius 5px
        .clear
            width 150px
            text-align right
            cursor pointer
            &:hover
                color: rgba(175,47,47,0.9)
</style>