<template>
  <div :title="isFullscreen ? $t('message.system.fullScreenBack') : $t('message.system.fullScreen')">
    <i class="sfont" :class="isFullscreen ? 'system-quanping':'system-quanping1'" @click="toggle"></i>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useFullscreen } from '@vueuse/core'

export default defineComponent({
  name: 'fullscreen',
  setup() {
    const { isFullscreen, toggle } = useFullscreen()
    return {
      isFullscreen,
      toggle
    }
  }
})
</script>

<style lang="scss" scoped>
  i {
    cursor: pointer;
    font-size: 18px;
    &:hover {
      background: rgba(0,0,0,.025);
    }
    &:focus {
      outline: none;
    }
  }
</style>
