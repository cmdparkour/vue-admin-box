<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <div class="box">
        <el-button v-debounce="getData(123)" type="primary">防抖按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import Debounce from '@/directive/debounce'
export default defineComponent({
  directives: {
    Debounce
  },
  setup() {
    const getData = (str)=> {
      console.log(str)
      ElMessage({
        type: 'success',
        message: '正在拉取数据'
      })
    }
    return {
      getData
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    display: flex;
    .el-input {
      margin-right: 10px;
    }
  }
</style>