<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-input
          v-model="fileName"
          :placeholder="$t('message.common.exportExcelTip')"
          @change="getTableData(true)"
        ></el-input>

        <el-button
          type="primary"
          :icon="Download"
          class="export-excel-btn"
          @click="handleExportExcel"
          >{{ $t('message.common.exportExcel') }}</el-button
        >
      </div>
      <div class="layout-container-form-search">
        <el-input
          v-model="query.input"
          :placeholder="$t('message.common.searchTip')"
          @change="getTableData(true)"
        ></el-input>
        <el-button
          type="primary"
          :icon="Search"
          class="search-btn"
          @click="getTableData(true)"
          >{{ $t('message.common.search') }}</el-button
        >
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        :reserve-selection="true"
        :row-key="(row) => row.id"
        v-model:page="page"
        v-loading="loading"
        :showIndex="true"
        :data="tableData"
        @getTableData="getTableData"
      >
        <el-table-column prop="name" label="名称" align="center" />
        <el-table-column prop="radio" label="在线状态" align="center">
          <template #default="scope">
            <el-tag type="success" v-show="scope.row.radio == 1">在线</el-tag>
            <el-tag type="danger" v-show="scope.row.radio == 2">离线</el-tag>
            <el-tag type="info" v-show="scope.row.radio == 3">注销</el-tag>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, isRef, toRaw, unref } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData } from '@/api/table'
import { ElMessage } from 'element-plus'
import { aoaToSheetXlsx } from './ExportExcel'
import { useI18n } from 'vue-i18n'
import { Download, Search } from '@element-plus/icons'
export default defineComponent({
  name: 'crudTable',
  components: {
    Table,
    // Layer
  },
  setup() {
    // 存储搜索用的数据
    const { t } = useI18n()
    const query = reactive({
      input: '',
    })
    const fileName = ref('')

    const page: Page = reactive({
      index: 1,
      size: 20,
      total: 0,
    })
    const loading = ref(true)
    const tableData = ref([])
    const chooseData = ref([])

    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getTableData = (init: boolean) => {
      loading.value = true
      if (init) {
        page.index = 1
      }
      let params = {
        page: page.index,
        pageSize: page.size,
        ...query,
      }
      getData(params)
        .then((res) => {
          tableData.value = res.data.list
          page.total = Number(res.data.pager.total)
        })
        .catch((error) => {
          tableData.value = []
          page.index = 1
          page.total = 0
        })
        .finally(() => {
          loading.value = false
        })
    }

    // 导出Excel表格
    const handleExportExcel = () => {
      if (!unref(fileName).trim()) {
        ElMessage({
          showClose: true,
          message: t('message.common.exportExcelTip'),
          type: 'warning',
        })
        return
      }
      let table = unref(tableData)
      let header = ['ID', '姓名', '在线状态']
      let data = table.map((item) => {
        let { id, name, radio } = item
        return [id, name, radio]
      })
      aoaToSheetXlsx({
        data,
        header,
        filename: `${unref(fileName)}.xlsx`,
      })
    }
    const handleExportZip = () => {}

    getTableData(true)
    return {
      Download,
      Search,
      query,
      fileName,
      tableData,
      chooseData,
      loading,
      page,
      // layer,
      handleExportExcel,
      handleExportZip,
      // handleToggleRowSelection,
      getTableData,
    }
  },
})
</script>

<style lang="scss" scoped></style>
