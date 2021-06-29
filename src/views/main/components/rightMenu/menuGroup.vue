<template>
  <div class="box">
    <h1>按钮组</h1>
    <div v-contextmenu:contextmenu class="wrapper">
      <code>右键点击此区域</code>
    </div>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item>菜单</v-contextmenu-item>
      <v-contextmenu-group>
        <v-contextmenu-item>vue3</v-contextmenu-item>
        <v-contextmenu-item>axios</v-contextmenu-item>
        <v-contextmenu-item disabled>vuex</v-contextmenu-item>
        <v-contextmenu-item>router</v-contextmenu-item>
      </v-contextmenu-group>

      <v-contextmenu-divider />

      <v-contextmenu-group title="按钮组">
        <v-contextmenu-item>菜单1</v-contextmenu-item>
        <v-contextmenu-item>菜单2</v-contextmenu-item>
        <v-contextmenu-item disabled>菜单3</v-contextmenu-item>
      </v-contextmenu-group>
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
  ContextmenuGroup
} from "v-contextmenu";
const ExampleSFC = defineComponent({
  name: "ExampleSFC",
  components: {
    [Contextmenu.name]: Contextmenu,
    [ContextmenuItem.name]: ContextmenuItem,
    [ContextmenuDivider.name]: ContextmenuDivider,
    [ContextmenuSubmenu.name]: ContextmenuSubmenu,
    [ContextmenuGroup.name]: ContextmenuGroup
  },
  directives: {
    contextmenu: directive
  }
});
export default ExampleSFC;
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
  background-color: rgba(182, 44, 56, 0.2);
}
</style>