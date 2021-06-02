<template>
  <div>
    <barChart />
    <el-row :gutter="20">
      <el-col :lg="12" :md="24">
        <pieChart />
      </el-col>
      <el-col :lg="12" :md="24">
        <circleChart />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import barChart from './barChart.vue'
import pieChart from './pieChart.vue'
import circleChart from './circleChart.vue'
export default defineComponent({
  components: {
    barChart,
    pieChart,
    circleChart
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  
</style>