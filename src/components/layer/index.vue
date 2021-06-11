<template>
  <div v-drag>
    <el-dialog
      v-model="layer.show"
      :title="layer.title"
      :width="layer.width"
      center
    >
      <template #footer>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import drag from '@/directive/drag/index'
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
  directives: {
    drag
  },
  setup() {
    return {
      
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>