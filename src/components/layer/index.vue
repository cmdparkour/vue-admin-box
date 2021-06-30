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
import type { Ref } from 'vue'
import { defineComponent, ref, watch } from 'vue'
import drag from '@/directive/drag/index'
import { UseDialogProps } from 'element-plus/lib/el-dialog/src/dialog'
export interface LayerInterface {
  show: boolean;
  title: string;
  showButton?: boolean;
  width?: string;
  [propName: string]: any;
}
interface SystemDialogProps extends UseDialogProps {
  handleClose: Function
}
export interface LayerType {
  close: Function
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
      },
      required: true
    }
  },
  directives: {
    drag
  },
  setup(props, ctx) {
    const dialog: Ref<SystemDialogProps> = ref(null) as any
    function confirm() {
      ctx.emit('confirm')
    }
    function close() {
      dialog.value.handleClose()
    }
    return {
      dialog,
      confirm,
      close
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>