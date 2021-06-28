<template>
  <div class="dictionary">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .dictionary {
    width: 100%;
    height: 100%;
  }
</style>