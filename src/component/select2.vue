<template lang="html">
  <select>
    <slot></slot>
  </select>
</template>

<script>
import $ from 'jquery'
import '../assets/select2/select2.css'
import '../assets/select2/select2.min.js'
export default {
  props:['options', 'value'],
  data () {
    return {}
  },
  computed: {},
  mounted () {
    var self = this;
    $(this.$el)
      .val(this.value)
      .select2({data: this.options})
      .on('change', function() {
        self.$emit('input', this.value)
      })
  },
  watch: {
    value: function(value) {
       // update value
      $(this.$el).select2('val', value);
      console.log(value)
    },
    options: function (options) {
      // update options
      $(this.$el).select2({data: options})
      console.log(options)
    }
  },
  destroyed: function () {
    $(this.$el).off().select2('destroy')
  }
}
</script>

<style lang="css" scoped>
html,
body {
    font: 13px/18px sans-serif;
}

select {
    min-width: 300px;
}
</style>
