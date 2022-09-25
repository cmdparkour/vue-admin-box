<!--
 * @Date: 2022-09-25 20:06:34
 * @Description: 
-->
<template>
  <div class="layout-container">
    <div style="text-align: left; padding: 15px;">
      <el-button @click="refresh">重新加载</el-button>
      <el-button @click="closeCurrent">关闭当前标签</el-button>
      <el-button type="primary" @click="closeOther">关闭其他标签</el-button>
      <el-button type="success" @click="closeAll">关闭所有标签</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { closeCurrentTab, closeOtherTab, closeAllTab, refreshCurrentTab } from '@/utils/tab'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    /** 关闭当前选项卡 */
    const closeCurrent = () => {
      closeCurrentTab()
    }
    /** 关闭其他选项卡 */
    const closeOther = () => {
      closeOtherTab()
    }
    /** 关闭所有选项卡 */
    const closeAll = () => {
      closeAllTab()
    }
    /** 重新加载 */
    const refresh = () => {
      refreshCurrentTab()
    }
    return {
      closeCurrent,
      closeOther,
      closeAll,
      refresh,
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>