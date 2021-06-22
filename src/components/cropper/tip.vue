<template>
  <div class="tip-box" v-for="(array1, index1) in handleData" :key="index1">
    <el-button-group v-for="(array2, index2) in array1" :key="index2">
      <el-tooltip v-for="(row, index3) in array2" :key="index3" :content="row.tip" :show-after="1000" :class="row.class" effect="dark" placement="top">
        <el-button type="primary" :icon="row.icon" size="mini" @click="row.command"></el-button>
      </el-tooltip>
    </el-button-group>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type Cropper from 'cropperjs'
export default defineComponent({
  props: {
    cropper: {
      type: Object as PropType<Cropper>,
      required: true
    }
  },
  setup(props) {
    const handleData = [
      [
        [
          { icon: 'el-icon-rank', tip: '切换模式：图片移动', command: () => props.cropper.setDragMode('move') },
          { icon: 'el-icon-crop', tip: '切换模式：裁剪功能', command: () => props.cropper.setDragMode('crop') },
          { icon: 'el-icon-refresh', tip: '重置裁剪框', command: () => props.cropper.reset() }
        ],
        [
          { icon: 'el-icon-back', tip: '图片左移', command: () => props.cropper.move(-10, 0) },
          { icon: 'el-icon-right', tip: '图片右移', command: () => props.cropper.move(10, 0) },
          { icon: 'el-icon-top', tip: '图片上移', command: () => props.cropper.move(0, -10) },
          { icon: 'el-icon-bottom', tip: '图片下移', command: () => props.cropper.move(0, 10) }
        ]
      ],
      [
        [
          { icon: 'el-icon-zoom-in', tip: '图片放大', command: () => props.cropper.zoom(0.1) },
          { icon: 'el-icon-zoom-out', tip: '图片缩小', command: () => props.cropper.zoom(-0.1) },
        ],
        [
          { icon: 'el-icon-refresh-left', tip: '向左旋转45度', command: () => props.cropper.rotate(-45) },
          { icon: 'el-icon-refresh-right', tip: '向右旋转45度', command: () => props.cropper.rotate(45) },
        ],
        [
          { icon: 'el-icon-sort', tip: '垂直翻转', command: () => props.cropper.scaleY(props.cropper.getImageData().scaleY === 1 ? -1 : 1 ) },
          { icon: 'el-icon-sort', tip: '水平翻转', command: () => props.cropper.scaleX(props.cropper.getImageData().scaleX === 1 ? -1 : 1 ), class: "reverse" },
        ]
      ]
    ]
    return {
      handleData
    }
  }
})
</script>

<style lang="scss" scoped>
  .tip-box{
    margin-top: 10px;
    .button-group {
      display: inline-block;
      border-radius: 4px;
      overflow: hidden;
      .el-button{
        border-radius: 0;
        padding: 7px 10px;
      }
      .el-button+.el-button{
        margin-left: 0;
      }
    }
    .el-button-group+.el-button-group{
      margin-left: 10px;
    }
    .reverse :deep(i){
      transform: rotate(90deg);
    }
  }
</style>