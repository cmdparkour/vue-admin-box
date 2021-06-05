<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" icon="el-icon-circle-plus-outline">{{ $t('message.common.add') }}</el-button>
        <el-button type="danger" icon="el-icon-delete">{{ $t('message.common.delBat') }}</el-button>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-btn">{{ $t('message.common.search') }}</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table :showIndex="true" :showSelection="true" :data="data">
        <el-table-column prop="deviceId" label="设备id" width="100" align="center" />
        <el-table-column prop="startTime" label="开始时间" min-width="180" align="center" />
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Table from '@/components/table/index.vue'
export default defineComponent({
  components: {
    Table
  },
  setup() {
    const data = reactive([])
    for(let i=0; i< 100; i++) {
      data.push({})
    }
    return {
      data
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>