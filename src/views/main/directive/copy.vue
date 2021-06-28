<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <div class="box">
        <el-input v-model="input" placeholder="输入需要粘贴的值"></el-input>
        <el-button v-copy="input" type="primary">复制到剪切板</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Copy from '@/directive/copy'
export default defineComponent({
  directives: {
    Copy
  },
  setup() {
    let input = ref('')
    return {
      input
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