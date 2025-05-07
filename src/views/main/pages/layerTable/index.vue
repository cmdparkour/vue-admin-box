<template>
  <div class="layout-container absent">
    <el-button type="primary" @click="handleOpen">{{ $t('message.layerTable.btn') }}</el-button>
    <Layer :layer="layer" v-if="layer.show" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Layer from './layer.vue'
// 弹窗控制器
const layer: LayerInterface = reactive({
  show: false,
  title: '新增',
  showButton: true
})
const handleOpen = () => {
  layer.show = true
}
</script>

<style lang="scss" scoped>
.absent {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>