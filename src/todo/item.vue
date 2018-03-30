<!-- 每一项item -->
<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input 
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    >
    <label>{{todo.content | capitalize }}</label>
    <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  methods: {
    deleteTodo () {
      this.$emit('del', this.todo.id);
    }
  }
}
</script>
<style lang="stylus" scoped>
  .todo-item
    position relative
    background-color #ffffff
    font-size 24px
    border-bottom 1px solid rgba(0,0,0,0.06)
    &:hover
      .destory:after
        content: '×'
    &.completed
      label
        color #d9d9d9
        text-decoration line-through
    input.toggle
      position absolute
      top 0
      bottom 0
      margin auto 0
      width 40px
      height 40px
      text-align center
      border none
      appearance none
      outline none
      &:after
        content url('../assets/images/round.svg')
      &:checked:after
        content url('../assets/images/done.svg')
    label
      display block
      margin-left 45px
      padding 15px 60px 15px 15px
      line-height 1.2
      white-space pre-line
      word-break break-all
      transition color 0.4s
    .destory
      position absolute
      top 0
      right 10px
      bottom 0
      margin auto 0 11px
      width 40px
      height 40px
      font-size 30px
      color #cc9a9a
      transition color 0.2s ease-out
      background-color transparent
      appearance none
      border-width 0
      cursor pointer
      outline none
</style>