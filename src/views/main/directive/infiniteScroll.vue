<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <el-alert
        title="使用element-plus自带的无限加载功能实现"
        type="info"
        show-icon
        style="margin-bottom: 20px;">
      </el-alert>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    let count = ref(0)
    const load = () => {
      count.value += 2
    }
    return {
      count,
      load
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout-container-table {
    display: flex;
    flex-direction: column;
    .infinite-list {
      height: 500px;
      padding: 0;
      margin: 0;
      flex: 1;
      list-style: none;
      .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #e8f3fe;
        margin: 10px 10px 10px 0;
        color: #7dbcfc;
      }
    }
  }
</style>