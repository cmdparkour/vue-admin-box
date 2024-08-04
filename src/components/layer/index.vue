<template>
  <div v-drag="layer.show">
    <el-dialog
      v-model="layer.show"
      :title="layer.title"
      :width="layer.width"
      center
      :draggable="draggable"
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
export interface LayerInterface {
  show: boolean;
  title: string;
  showButton?: boolean;
  width?: string;
  draggable?: boolean;
  [propName: string]: any;
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
          showButton: false,
          draggable: true,
        }
      },
      required: true
    },
    draggable: {
      type: Boolean,
      default: true
    }
  },
  setup(props, ctx) {
    function confirm() {
      ctx.emit('confirm')
    }
    function close() {
      props.layer.show = false
    }
    return {
      confirm,
      close
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>