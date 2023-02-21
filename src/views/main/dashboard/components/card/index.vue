<template>
  <div class="card-list">
    <Row v-for="row in list" :key="row.id" :row="row" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Row from './row.vue'
export default defineComponent({
  components: {
    Row
  },
  setup() {
    const list = [
      { id: 1, name: '访问人数', data: '100000', color: '#4e73df', icon: 'sfont system-yonghu' },
      { id: 2, name: '最新信息', data: '30', color: '#1cc88a', icon: 'sfont system-xiaoxi' },
      { id: 3, name: '库存数量', data: '20000', color: '#36b9cc', icon: 'sfont system-shuliang_mianxing' },
      { id: 4, name: '当月营收', data: '20,000', color: '#f6c23e', icon: 'sfont system-jindutiaoshouyidaozhang' }
    ]
    return {
      list
    }
  }
})
</script>

<style lang="scss" scoped>
  .card-list {
    width: calc(100% + 20px);
    margin-left: -10px;
    display: flex;
    flex-wrap: wrap;
  }
</style>