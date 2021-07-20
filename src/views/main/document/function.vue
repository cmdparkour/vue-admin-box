<template>
  <div class="layout-container">
    <h1>主要功能说明</h1>
    <el-row :gutter="12">
      <el-col :span="12" class="el-col-tree-box">
        <h2>目录结构</h2>
        <div class="custom-tree">
          <el-tree
            :data="data"
            :props="defaultProps"
            :highlight-current="true"
            @node-click="handleNodeClick"
          >
          <template #default="{ node, data }">
            <div class="custom-tree-node">
              <i :class="data.children ? 'el-icon-files': 'el-icon-document'"></i>
              <span>{{ node.label }}</span>
            </div>
          </template>
        </el-tree>
        </div>
      </el-col>
      <el-col :span="12" class="el-col-tree-box">
        <h2>文件说明</h2>
        <div class="custom-tree des">
          <p v-for="(row, key) in active.des" :key="key">{{ row }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { data } from './dir'
export default defineComponent({
  setup() {
    const defaultProps = {
      children: 'children',
      label: 'label'
    }
    let active = ref({ des: ['点击左侧目录，可查看到每个目录及文件的功能说明'] }) as any
    const handleNodeClick = (row: object) => {
      active.value = row
      console.log(row);
    }
    return {
      data,
      defaultProps,
      active,
      handleNodeClick
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout-container {
    padding: 15px;
    box-sizing: border-box;
    .el-row{
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      overflow: hidden;
    }
    .custom-tree{
      border: 1px solid #eee;
      padding: 15px;
      overflow-y: auto;
      flex: 1;
      .el-tree{
        width: 100%;
      }
      :deep(.el-tree-node__content) {
        height: 36px;
      }
      &.des {
        p {
          text-align: left;
          line-height: 29px;
          text-indent: 2em;
          margin-top: 0;
        }
      }
    }
    .custom-tree-node {
      i {
        margin-right: 10px;
      }
    }
    .el-col-tree-box {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
  h1 {
    margin: 0;
  }
  h2 {
    
  }
</style>