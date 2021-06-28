<template>
  <div class="layout-container">
    <div ref="dom" class="chart"></div>
  </div>
</template>

<script lang="ts">
import type { Ref } from 'vue'
import { defineComponent, onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core' //引入监听函数，监听在vue实例中可自动销毁，无须手动销毁
import * as echarts from 'echarts/core'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  RadarChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'

// 引入options配置
import options from './options/radar'
export default defineComponent({
  setup() {
    const dom: Ref<HTMLDivElement> = ref(null) as any
    let myEchart: echarts.ECharts|null = null
    onMounted(() => {
      echarts.use([TitleComponent, TooltipComponent, GridComponent, RadarChart, LegendComponent, CanvasRenderer])
      myEchart = echarts.init(dom.value)
      myEchart.setOption(options)
      useEventListener("resize", () => myEchart!.resize())
    })
    return {
      dom
    }
  }
})
</script>

<style lang="scss" scoped>
  .chart {
    width: 100%;
    height: 100%;
    background: #161627;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
</style>