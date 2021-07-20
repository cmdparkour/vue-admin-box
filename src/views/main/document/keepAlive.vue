<template>
  <div class="layout-container">
    <h1>keep-alive功能的使用</h1>
    <article>
      <section>
        <p>当前项目已实现keep-alive缓存的页面有，<b>分类联动表格</b>、<b>树联动表格</b>、<b>卡片列表</b>。</p>
        <p>重点：开发者不需要配各种name，只需要在路由管理文件中配置<b>cache：true</b>即可，这是实现keep-alive唯一需要关注的项。</p>
        <p>由系统自动管理keep-alive需要的组件。</p>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .layout-container {
    article {
      padding: 0 20px;
      p {
        text-align: left;
      }
    }
  }
</style>