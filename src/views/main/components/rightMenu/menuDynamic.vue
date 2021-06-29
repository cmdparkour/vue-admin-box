<template>
  <div class="box">
    <h1>动态菜单</h1>
    <div v-contextmenu:contextmenu class="wrapper">
      <code>右键点击此区域</code>
    </div>

    <v-contextmenu ref="contextmenu">
      <v-contextmenu-group title="操作">
        <v-contextmenu-item :hide-on-click="false" @click="extra.push('item')">添加菜单</v-contextmenu-item>
        <v-contextmenu-item :hide-on-click="false" @click="extra.push('group')">添加菜单组</v-contextmenu-item>
        <v-contextmenu-item :hide-on-click="false" @click="extra.push('submenu')">添加子菜单</v-contextmenu-item>
        <v-contextmenu-item :hide-on-click="false" @click="extra.pop()">删除</v-contextmenu-item>
      </v-contextmenu-group>

      <template v-for="(item, index) of extra" :key="index">
        <v-contextmenu-divider />

        <v-contextmenu-group v-if="item === 'group'" :title="`菜单组 ${index + 1}`">
          <v-contextmenu-item>菜单1</v-contextmenu-item>
          <v-contextmenu-item>菜单2</v-contextmenu-item>
          <v-contextmenu-item>菜单3</v-contextmenu-item>
        </v-contextmenu-group>

        <v-contextmenu-submenu v-else-if="item === 'submenu'" :title="`子菜单 ${index + 1}`">
          <v-contextmenu-item>菜单1</v-contextmenu-item>
          <v-contextmenu-item>菜单2</v-contextmenu-item>
          <v-contextmenu-item>菜单3</v-contextmenu-item>
        </v-contextmenu-submenu>

        <v-contextmenu-item v-else>菜单 {{ index + 1 }}</v-contextmenu-item>
      </template>
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
export default defineComponent({
  name: "ExampleDynamic",
  components: {
    [Contextmenu.name]: Contextmenu,
    [ContextmenuItem.name]: ContextmenuItem,
    [ContextmenuDivider.name]: ContextmenuDivider,
    [ContextmenuSubmenu.name]: ContextmenuSubmenu,
    [ContextmenuGroup.name]: ContextmenuGroup
  },
  directives: {
    contextmenu: directive
  },
  data() {
    return {
      extra: []
    };
  },
  methods: {
    addItem(type: string = "item") {
      this.extra.push(type);
    },
    removeItem() {
      this.extra.pop();
    }
  }
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
  background-color: rgba(52, 187, 64, 0.2);
}
</style>