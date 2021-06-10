<template>
  <el-dialog
    v-model="layer.show"
    :title="layer.title"
    :width="layer.width"
    center
  >
    <template #footer>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
export interface LayerInterface {
  show: boolean;
  title: string;
  showButton?: boolean;
  width?: string;
  [propName: string]: any;
}
export default defineComponent({
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: false
        }
      }
    }
  },
  setup() {
    
    return {
      
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>