<template>
  <div class="layout-container">
    <el-alert type="success">
      <p style="text-align: left;">demo采用插件：splitpanes</p>
      <p>github地址：<a href="https://github.com/antoniandre/splitpanes" target="_blank">https://github.com/antoniandre/splitpanes</a></p>
      <p style="text-align: left;">使用方法：<a href="https://antoniandre.github.io/splitpanes" target="_blank">https://antoniandre.github.io/splitpanes</a></p>
    </el-alert>
    <splitpanes class="default-theme" style="height: 100%">
      <pane min-size="20">
        <div class="item" style="background-color: #fe5308;">1</div>
      </pane>
      <pane>
        <splitpanes class="default-theme" horizontal>
          <pane>
            <div class="item" style="background-color: #fefe34;">2</div>
          </pane>
          <pane>
            <div class="item" style="background-color: #cfea2b;">3</div>
          </pane>
          <pane>
            <div class="item" style="background-color: #66b032;">4</div>
          </pane>
        </splitpanes>
      </pane>
      <pane>
        <div class="item" style="background-color: #0492ce;">5</div>
      </pane>
    </splitpanes>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
export default defineComponent({
  components: {
    Splitpanes,
    Pane
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica, Arial, sans-serif;
    color: #333;
    font-size: 5em;
    width: 100%;
    height: 100%;
  }
</style>