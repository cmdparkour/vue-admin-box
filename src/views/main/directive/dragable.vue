<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <p>自由切换父级</p>
      <el-button @click="changeBox('father')">father</el-button>
      <el-button @click="changeBox('body')">body</el-button>
      <el-button @click="changeBox('.layout-container-table')">自定义父级类名：.layout-container-table</el-button>
      <p>父级：{{ dragableFather }}</p>
      <div class="box">
        <div class="row" v-dragable="dragableFather"></div>
        <div class="row" v-dragable="dragableFather"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dragable from '@/directive/dragable'
export default defineComponent({
  directives: {
    dragable
  },
  setup() {
    let dragableFather = ref('body')
    const changeBox = (str: string)=> {
      dragableFather.value = str
    }
    return {
      dragableFather,
      changeBox
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    border: 1px solid #eee;
    width: 100%;
    height: 200px;
    .row {
      width: 50px;
      height: 50px;
      background: red;
    }
  }
</style>