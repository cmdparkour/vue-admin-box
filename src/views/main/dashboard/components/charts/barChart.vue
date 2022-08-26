<template>
  <div class="box">
    <Chart :option="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, reactive } from 'vue'
import Chart from '@/components/charts/index.vue'
import option from './modules/bar'
export default defineComponent({
  components: {
    Chart
  },
  setup() {
    let timer:any = null;
    const datar = [100,200,300,400,500,600,700,800,900,1000,1100,1200]
    const options = reactive(option)
    // 模拟异步请求
    timer = setTimeout(() => {
      options.series[0].data = datar
    },1000)
    // 组件销毁时清除定时器
    onBeforeUnmount(() => {
      clearInterval(timer)
      timer = null;
    })
    return {
      options
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    margin: 10px auto 0;
    width: calc(100% - 40px);
    height: 400px;
    background: var(--system-page-background);
    padding: 20px;
    overflow: hidden;
  }
</style>