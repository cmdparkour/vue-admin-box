<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd">{{ $t('message.common.add') }}</el-button>
        <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel(chooseData)">
          <template #reference>
            <el-button type="danger" icon="el-icon-delete" :disabled="chooseData.length === 0">{{ $t('message.common.delBat') }}</el-button>
          </template>
        </el-popconfirm>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="query.input" :placeholder="$t('message.common.searchTip')"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-btn" @click="getTableData(true)">{{ $t('message.common.search') }}</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="loading"
        :showIndex="true"
        :showSelection="true"
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="userName" label="字典项目名称" align="center" />
        <el-table-column prop="userName" label="显示名称" align="center" />
        <el-table-column prop="userName" label="值内容" align="center" />
        <el-table-column prop="hobby" label="备注" align="center" />
        <el-table-column :label="$t('message.common.handle')" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">{{ $t('message.common.update') }}</el-button>
            <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel([scope.row])">
              <template #reference>
                <el-button type="danger">{{ $t('message.common.del') }}</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </Table>
      <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData, del } from '@/api/table'
import Layer from './layer.vue'
import { LayerInterface } from '@/components/layer/index.vue'
export default defineComponent({
  components: {
    Table,
    Layer
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: ''
    })
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show: false,
      title: '新增',
      showButton: true
    })
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 20,
      total: 0
    })
    const loading = ref(true)
    const tableData = ref([])
    const chooseData = ref([])
    const handleSelectionChange = (val: []) => {
      chooseData.value = val
    }
    return {
      query,
      tableData,
      chooseData,
      loading,
      page,
      layer,
      handleSelectionChange
    }
  },
  mounted() {
    this.getTableData(true)
  },
  methods: {
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    getTableData(init: Boolean) {
      this.loading = true
      if (init) {
        this.page.index = 1
      }
      let params = {
        page: this.page.index,
        pageSize: this.page.size,
        ...this.query
      }
      getData(params)
      .then(res => {
        this.tableData = res.data.list
        this.page.total = Number(res.data.pager.total)
      })
      .catch(error => {
        this.tableData = []
        this.page.index = 1
        this.page.total = 0
      })
      .finally(() => {
        this.loading = false
      })
    },
    // 删除功能
    handleDel(data: object[]) {
      let params = {
        ids: data.map((e:any)=> {
          return e.id
        }).join(',')
      }
      del(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.getTableData(this.tableData.length === 1 ? true : false)
      })
    },
    // 新增弹窗功能
    handleAdd() {
      this.layer.title = '新增数据'
      this.layer.show = true
      delete this.layer.row
    },
    // 编辑弹窗功能
    handleEdit(row: object) {
      this.layer.title = '编辑数据'
      this.layer.row = row
      this.layer.show = true
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>