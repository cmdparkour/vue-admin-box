<template>
  <div class="layout-container">
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'adminAbc',
  setup() {
    const router = useRouter()
    console.log(router)
    const routes = router.options.routes
    console.log(routes)
  }
})
</script>

<style lang="scss" scoped>
  
</style>