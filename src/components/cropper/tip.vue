<template>
  <div class="tip-box" v-for="(array1, index1) in handleData" :key="index1">
    <el-button-group v-for="(array2, index2) in array1" :key="index2">
      <el-tooltip v-for="(row, index3) in array2" :key="index3" effect="dark" :content="row.tip" placement="top">
        <el-button type="primary" :icon="row.icon" size="mini"></el-button>
      </el-tooltip>
    </el-button-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const handleData = [
      [
        [
          { icon: 'el-icon-rank', tip: '切换模式：图片移动', command: '' },
          { icon: 'el-icon-crop', tip: '切换模式：裁剪功能', command: '' },
          { icon: 'el-icon-refresh', tip: '重置裁剪框', command: '' }
        ],
        [
          { icon: 'el-icon-back', tip: '图片左移', command: '' },
          { icon: 'el-icon-right', tip: '图片右移', command: '' },
          { icon: 'el-icon-top', tip: '图片上移', command: '' },
          { icon: 'el-icon-bottom', tip: '图片下移', command: '' }
        ]
      ],
      [
        [
          { icon: 'el-icon-zoom-in', tip: '图片放大', command: '' },
          { icon: 'el-icon-zoom-out', tip: '图片缩小', command: '' },
        ],
        [
          { icon: 'el-icon-refresh-left', tip: '向左旋转45度', command: '' },
          { icon: 'el-icon-refresh-right', tip: '向右旋转45度', command: '' },
        ],
        [
          { icon: 'el-icon-d-caret', tip: '', command: '' },
          { icon: 'el-icon-d-caret', tip: '', command: '' },
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
  }
</style>