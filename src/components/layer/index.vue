<template>
  <div v-drag>
    <el-dialog
      v-model="layer.show"
      :title="layer.title"
      :width="layer.width"
      center
    >
      <slot></slot>
      <template #footer v-if="layer.showButton">
        <div>
          <el-button type="primary" @click="confirm">确认</el-button>
          <el-button @click="close">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
  setup(props, ctx) {
    function close() {
      props.layer.show = false
    }
    function confirm() {
      ctx.emit('confirm')
    }
    return {
      close,
      confirm
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>