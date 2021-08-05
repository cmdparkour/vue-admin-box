<template>
  <iframe src="//blog.51weblove.com" frameborder="0" class="full-iframe"></iframe>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .full-iframe {
    width: 100%;
    height: calc(100% - 5px);
    overflow: hidden;
  }
</style>