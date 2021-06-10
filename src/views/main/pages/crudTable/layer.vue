<template>
  <Layer :layer="layer">

  </Layer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layer from '@/components/layer/index.vue'
export default defineComponent({
  components: {
    Layer
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true
        }
      }
    }
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  
</style>