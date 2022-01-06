new Vue({
  el: '#notebook',
  data() {
    return {
      content: 'This is a note.'
    }
  },
  computed: {
    notePreview() {
      return marked.parse(this.content)
    }
  },
  watch: {
    // 监听content数据属性
    content: {
      handler(val, oldVal) {
        console.log('new note:', val, 'old note:', oldVal)
      }
    }
  }
})