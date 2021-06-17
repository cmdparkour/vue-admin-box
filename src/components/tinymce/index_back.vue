<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import plugins from './plugins'
import toolbar from './toolbar'
import load from './dynamicLoadScript'
const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'
export default defineComponent({
  props: {
    id: {
      type: String,
      default: function() {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
    value: {
      type: String,
      default: ''
    },
  },
  setup() {
    
  }
})
</script>

<style lang="scss" scoped>
  
</style>