/*
* 使用说明：用户只需传入options即可，options请参照官网示例中的options
* 本组件采用整包引入echarts的方法，用于适配所有的echarts控件
* 如需按需加载引入echarts，可参照写法：echarts官网/在打包环境中使用ECharts
*/
<template>
  <div ref="chart" class="chart" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useEventListener } from '@vueuse/core' // 引入监听函数，监听在vue实例中可自动销毁，无须手动销毁
import * as echarts from 'echarts'
export default defineComponent({
  props: {
    option: Object
  },
  setup(props) {
    let option: any = props.option
    return {
      option
    }
  },
  mounted() {
    const dom: any = this.$refs.chart
    // 需要在页面Dom元素加载后再初始化echarts对象
    let myChart = echarts.init(dom)
    myChart.setOption(this.option)
    useEventListener("resize", () => myChart.resize());
  }
})
</script>

<style lang="scss" scoped>
  .chart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
</style>