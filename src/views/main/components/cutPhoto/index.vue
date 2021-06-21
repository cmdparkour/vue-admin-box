<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <v3-cropper
        style="width: 100%;height: 500px"
        :src="options.src"
      ></v3-cropper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import v3Cropper from 'vue3-cropperjs'
import 'vue3-cropperjs/dist/v3cropper.css'
export default defineComponent({
  components: {
    v3Cropper
  },
  setup() {
    let options = {
      src: 'https://image-static.segmentfault.com/941/415/94141560-5b839e9bc41fc_fix732'
    }
    return {
      options
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>