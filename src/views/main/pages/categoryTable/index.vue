<template>
  <div class="full">
    <div class="left">
      <category />
    </div>
    <div class="content">
      <my-table />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'
import Category from './category.vue'
import myTable from './my-table.vue'
export default defineComponent({
  name: 'categoryTable',
  components: {
    Category,
    myTable,
  },
  setup() {
    let active: any = ref({})
    provide('active', active)
  }
})
</script>

<style lang="scss" scoped>
  .full {
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    .left {
      width: 250px;
    }
    .content {
      flex: 1;
      width: calc(100% - 250px);
      height: 100%;
    }
  }
</style>