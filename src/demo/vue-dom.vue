<template>
  <div ref="dom">
  </div>
</template>

<script lang="ts">
import { Ref } from 'vue'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const dom: Ref<HTMLElement> = ref(null) as any
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