<template>
  <div class="layout-container">
    <h1>使用说明</h1>
    <p>为什么文档是写在系统内，一方面是因为偷懒，另一方面是因为我坚信，如果我用着不爽，那么大家用着也不会爽，所以文档部分就暂时放置于此了</p>
    <div style="padding: 0 10px;"><basic-template /></div>
    <article>
      <h2>简介</h2>
      <p>vue-admin-box是一个开源的中后台管理项目，主要技术栈为vue3全家桶，包括了：vue3(vue-next)、vite、element-plus、vue-router、vuex、axios、vite-plugin-mock等众多中后台项目常用技术。</p>
      <ol>
        <li>vue3(vue-next)：本项目的核心技术栈，用于响应式模块的控制</li>
        <li>vite：本地服务运行、打包编译工具，特点：轻量、快速</li>
        <li>element-plus：vue3的组件库</li>
        <li>vue-router：路由控制插件，本项目专门针对实际业务作了大量适配</li>
        <li>vuex：状态管理器，并写了一个本地缓存插件供使用</li>
        <li>axios：数据请求库，基于此做了更进一步的封装</li>
        <li>vite-plugin-mock：本地和线上mock数据专用库，本地可查看到真实http请求，线上使用js版本来做替换</li>
      </ol>
      <h2>关于crud的优化</h2>
      <p>简单来说，你直接复制业务表格的文件夹，改个名，换个接口，调一下里面的细节，就可以直接使用了</p>
      <p>业务表格，这是本开源项目最核心的理念，我基于日常开发过程中的情景，封装了一个核心的<b>弹窗组件</b>及一个<b>table组件</b>。</p>
      <p>在日常开发中，增删查改是一个核心，也是一个最重要的功能，为了高效开发，建议了解这两个组件，具体的demo可以参照页面：
        <el-link type="primary" href="/#/pages/crudTable">业务表格</el-link>、
        <el-link type="primary" href="/#/pages/categoryTable">分类联动表格</el-link>、
        <el-link type="primary" href="/#/pages/treeTable">树形联动表格</el-link>
      </p>
      <h3>弹窗组件</h3>
      <p>默认支持拖拽，并封装了一套专门与表格组件联动的模式，使用此模式可以快速开发</p>
      <h3>表格组件</h3>
      <p>把大部分表格与分页的逻辑处理到公用组件之中，开箱即用</p>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basicTemplate from '@/views/main/dashboard/components/basic-template.vue'
export default defineComponent({
  components: {
    basicTemplate
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  article {
    padding: 20px 50px;
    text-align: left;
    ol {
      li {
        line-height: 30px;
      }
    }
  }
</style>