<template>
  <div v-drag>
    <el-dialog
      ref="dialog"
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
    function confirm() {
      ctx.emit('confirm')
    }
    return {
      confirm
    }
  },
  methods: {
    close() {
      // 触发内部的方法，以获得动画效果
      this.$refs.dialog.handleClose()
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>