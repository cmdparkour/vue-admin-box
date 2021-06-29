<template>
  <div class="layout-container">
    <div class="flex-box">
      <el-alert type="success">
      <p style="text-align: left;">demo采用插件：v-contextmenu</p>
      <p>使用方法：<a href="https://github.com/heynext/v-contextmenu" target="_blank">https://github.com/heynext/v-contextmenu</a></p>
    </el-alert>
    <el-row :gutter="24">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <!-- 基本使用 -->
        <basic />
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <!-- 按钮组 -->
        <menuGroup />
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <!-- 动态菜单 -->
        <menuDynamic />
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basic from "./basic.vue";
import menuGroup from "./menuGroup.vue";
import menuDynamic from "./menuDynamic.vue";
import "v-contextmenu/dist/themes/default.css"
export default defineComponent({
  components: {
    basic,
    menuGroup,
    menuDynamic
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .el-row {
    height: 100%;
    flex: 1;
    overflow: hidden;
    .el-col {
      height: 100%;
    }
  }
</style>