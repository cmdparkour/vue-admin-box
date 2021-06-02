<template>
  <div class="box">
    <Chart :option="option" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Chart from '@/components/charts/index.vue'
import option from './modules/pie'
export default defineComponent({
  components: {
    Chart
  },
  setup() {
    return {
      option
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    margin: 0 auto;
    width: calc(100% - 40px);
    height: 400px;
    background: #fff;
    padding: 20px 20px 10px;
    overflow: hidden;
  }
</style>