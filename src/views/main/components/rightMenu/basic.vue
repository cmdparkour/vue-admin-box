<template>
  <div class="box">
    <h1>基础使用</h1>
    <div v-contextmenu:contextmenu class="wrapper">
      <code>右键点击此区域</code>
    </div>

    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item>编辑</v-contextmenu-item>
      <v-contextmenu-item>删除</v-contextmenu-item>
      <v-contextmenu-item disabled>故事</v-contextmenu-item>
      <v-contextmenu-item>优秀</v-contextmenu-item>
      <v-contextmenu-divider />
      <v-contextmenu-submenu title="更多操作">
        <v-contextmenu-item>查看</v-contextmenu-item>
        <v-contextmenu-submenu title="文档">
          <v-contextmenu-item>源码文档</v-contextmenu-item>
          <v-contextmenu-item>说明文档</v-contextmenu-item>
        </v-contextmenu-submenu>
        <v-contextmenu-item>借阅</v-contextmenu-item>
      </v-contextmenu-submenu>
      <v-contextmenu-divider />
    </v-contextmenu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  directive,
  version,
  Contextmenu,
  ContextmenuItem,
  ContextmenuDivider,
  ContextmenuSubmenu,
  ContextmenuGroup,
} from "v-contextmenu";
export default defineComponent({
  name: "ExampleSimple",
  components: {
    [Contextmenu.name]: Contextmenu,
    [ContextmenuItem.name]: ContextmenuItem,
    [ContextmenuDivider.name]: ContextmenuDivider,
    [ContextmenuSubmenu.name]: ContextmenuSubmenu,
    [ContextmenuGroup.name]: ContextmenuGroup,
  },
  directives: {
    contextmenu: directive,
  },
});
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}
h1 {
  text-align: left;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
  border: 1px dashed rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  background-color: rgba(35, 212, 206, 0.2);
}
</style>