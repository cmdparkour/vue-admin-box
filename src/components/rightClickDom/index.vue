<template>
  <div ref="dom">
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    let dom = ref(null as HTMLDivElement|null)
    onMounted(() => {
      // console.log(dom)
      // dom.value?.addEventListener
    })
    return {
      dom
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>