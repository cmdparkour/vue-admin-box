<template>
  <div class="logo-container" :style="{ 'background-color': theme.system.logoBackGroundColor }">
    <!-- <img src="@/assets/logo.png" alt=""> -->
    <h1 v-if="!isCollapse" :style="{ 'color': theme.system.logoColor }">{{ $t(systemTitle) }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { systemTitle } from '@/config'
export default defineComponent({
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.app.isCollapse)
    const theme = computed(() => store.state.app.theme)
    return {
      isCollapse,
      systemTitle,
      theme
    }
  }
})
</script>

<style lang="scss" scoped>
  .logo-container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    h1 {
      font-size: 20px;
      white-space: nowrap;
    }
  }
</style>