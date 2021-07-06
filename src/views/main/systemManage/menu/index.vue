<template>
  <div class="layout-container">
    <div class="box">
      <el-tree
        ref="tree"
        class="my-tree"
        :data="routes"
        :props="defaultProps"
        node-key="id"
        highlight-current
        default-expand-all
      >
        <template #default="{ node, data }">
          <div class="custom-tree-node" @click="show(node, data)">
            <span v-if="data.meta">{{ $t(data.meta.title) }}</span>
          </div>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const defaultProps = {
      children: "children",
      label: "path",
    };
    const router = useRouter();
    console.log(router);
    const routes = router.options.routes;
    console.log(routes);
    const show = (node: any, data: any) => {
      console.log(node.data.meta.title);
      console.log(data);
    };
    return {
      routes,
      defaultProps,
      show,
    };
  },
});
</script>

<style lang="scss" scoped>
.layout-container {
  padding: 15px;
  box-sizing: border-box;
}
.box {
  border: 1px solid #eee;
  overflow-y: auto;
  height: calc(100%);
}
.my-tree {
  :deep(.el-tree-node__content) {
    height: 36px;
  }
  :deep(.el-tree-node.is-current > .el-tree-node__content) {
    // background-color: rgba(64, 158, 255, 0.4);
  }
  :deep(.el-tree-node > .el-tree-node__content) {
    transition: 0.2s;
  }
}
</style>