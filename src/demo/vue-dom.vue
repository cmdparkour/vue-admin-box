<template>
  <div ref="dom">
  </div>
</template>

<script lang="js">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const dom = ref(null)
    onMounted(() => {
      console.log(dom.value)
      const data = dom.value.getBoundingClientRect()
      console.log(data)
    })
    return {
      dom
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>