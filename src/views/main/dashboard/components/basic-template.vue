<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>基础模板</span>
      </div>
    </template>
      <div class="box">
        <div class="item">
          <h4>vue-admin-template-ts</h4>
          <p>ts版本的基础模板，支持ts，国际化，去除所有多余的页面及路由</p>
          <el-link type="primary" href="http://vue-admin-box-ts.51weblove.com" target="_blank">demo</el-link>
          <el-link type="primary" href="http://www.github.com/cmdparkour/vue-admin-box-template-ts" target="_blank">github地址</el-link>
          <el-link type="primary" href="https://gitee.com/cmdparkour/vue-admin-box-template-ts" target="_blank">码云地址</el-link>
        </div>
        <div class="item">
          <h4>vue-admin-template-js</h4>
          <p>js版本的基础模板，去除ts，去除国际化，去除所有多余的页面及路由</p>
          <el-link type="primary" href="http://vue-admin-box-js.51weblove.com" target="_blank">demo</el-link>
          <el-link type="primary" href="http://www.github.com/cmdparkour/vue-admin-box-template-js" target="_blank">github地址</el-link>
          <el-link type="primary" href="https://gitee.com/cmdparkour/vue-admin-box-template-js" target="_blank">码云地址</el-link>
        </div>
      </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .box-card {
    .card-header{
      text-align: left;
    }
    .box {
      .item {
        display: flex;
        align-items: center;
        * {
          margin-right: 20px;
        }
      }
    }
  }
</style>