<template>
  <div>
    <el-tooltip class="item" effect="dark" :content="isFullscreen ? '退出全屏':'全屏'" placement="bottom">
      <i class="el-icon-full-screen" @click="toggle"></i>
    </el-tooltip>
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

<style>
</style>
