<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>
        <el-button type="danger" icon="el-icon-delete">批量删除</el-button>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-btn">搜索</el-button>
      </div>
    </div>
    <div class="layout-container-table">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  
</style>