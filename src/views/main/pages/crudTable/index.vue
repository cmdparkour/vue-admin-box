<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" icon="el-icon-circle-plus-outline">{{ $t('message.common.add') }}</el-button>
        <el-button type="danger" icon="el-icon-delete">{{ $t('message.common.delBat') }}</el-button>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="query.input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-btn" @click="getTableData(true)">{{ $t('message.common.search') }}</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table ref="table" v-loading="loading" :showIndex="true" :showSelection="true" :data="tableData" @getTableData="getTableData">
        <el-table-column prop="userName" label="用户名" width="300" align="center" />
        <el-table-column prop="hobby" label="爱好" min-width="180" align="center" />
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm title="确定删除当前数据吗？" @confirm="handleDel([scope.row])">
              <template #reference>
                <el-button type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData } from '@/api/table'
export default defineComponent({
  components: {
    Table
  },
  setup() {
    const query = {
      input: ''
    }
    const loading = ref(true)
    const tableData = ref([])
    return {
      query,
      tableData,
      loading
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getTableData()
    })
  },
  methods: {
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    getTableData(init: false) {
      this.loading = true
      const page: Page = this.$refs.table.page
      let params = {
        page: page.index,
        pageSize: page.size,
        ...this.query
      }
      getData(params)
      .then(res => {
        this.loading = false
        this.tableData = res.data.list
        page.total = Number(res.data.pager.total)
      })
      .catch((error) => {
        this.tableData = []
        this.loading = false
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>