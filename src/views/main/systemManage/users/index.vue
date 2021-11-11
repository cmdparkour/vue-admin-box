<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" :icon="Plus" @click="handleAdd">{{
          $t("message.common.add")
        }}</el-button>
        <el-popconfirm
          :title="$t('message.common.delTip')"
          @confirm="handleDel(chooseData)"
        >
          <template #reference>
            <el-button
              type="danger"
              :icon="Delete"
              :disabled="chooseData.length === 0"
              >{{ $t("message.common.delBat") }}</el-button
            >
          </template>
        </el-popconfirm>
      </div>
      <div class="layout-container-form-search">
        <el-input
          v-model="query.input"
          :placeholder="$t('message.common.searchTip')"
        ></el-input>
        <el-button
          type="primary"
          :icon="Search"
          class="search-btn"
          @click="getTableData(true)"
          >{{ $t("message.common.search") }}</el-button
        >
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="loading"
        :showSelection="true"
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="id" label="Id" align="center" width="80" />
        <el-table-column prop="name" label="用户名" align="center" />
        <el-table-column prop="nickName" label="昵称" align="center" />
        <el-table-column prop="role" label="角色" align="center" />
        <el-table-column prop="isAdmin" label="超级管理员" align="center">
          <template #default="scope">
            <span class="statusName">{{ scope.row.isAdmin === 1 ? "是" : "否" }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template #default="scope">
            <span class="statusName">{{ scope.row.status === 1 ? "启用" : "禁用" }}</span>
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              :loading="scope.row.loading"
              @change="handleUpdateStatus(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('message.common.handle')"
          align="center"
          fixed="right"
          width="200"
        >
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">{{
              $t("message.common.update")
            }}</el-button>
            <el-popconfirm
              :title="$t('message.common.delTip')"
              @confirm="handleDel([scope.row])"
            >
              <template #reference>
                <el-button type="danger">{{ $t("message.common.del") }}</el-button>
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
import { defineComponent, ref, reactive } from "vue";
import { Page } from "@/components/table/type";
import { getData, del, updateStatus } from "@/api/system/user";
import { LayerInterface } from "@/components/layer/index.vue";
import { ElMessage } from "element-plus";
import Table from "@/components/table/index.vue";
import Layer from "./layer.vue";
import { Plus, Delete, Search } from '@element-plus/icons'
export default defineComponent({
  components: {
    Table,
    Layer,
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: "",
    });
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show: false,
      title: "新增",
      showButton: true,
    });
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 20,
      total: 0,
    });
    const loading = ref(true);
    const tableData = ref([]);
    const chooseData = ref([]);
    const handleSelectionChange = (val: []) => {
      chooseData.value = val;
    };
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getTableData = (init: Boolean) => {
      loading.value = true
      if (init) {
        page.index = 1
      }
      let params = {
        page: page.index,
        pageSize: page.size,
        ...query
      }
      getData(params)
        .then((res) => {
          let data = res.data.list
          data.forEach((d: any) => {
            d.loading = false
          })
          tableData.value = data
          page.total = Number(res.data.pager.total);
        })
        .catch((error) => {
          tableData.value = [];
          page.index = 1;
          page.total = 0;
        })
        .finally(() => {
          loading.value = false;
        });
    }
     // 删除功能
    const handleDel = (data: object[]) => {
      let params = {
        ids: data
          .map((e: any) => {
            return e.id;
          })
          .join(","),
      };
      del(params).then((res) => {
        ElMessage({
          type: "success",
          message: "删除成功",
        });
        getTableData(tableData.value.length === 1 ? true : false);
      });
    }
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = "新增数据";
      layer.show = true;
      delete layer.row;
    }
    // 编辑弹窗功能
    const handleEdit = (row: any) => {
      layer.title = "编辑数据";
      layer.row = row;
      layer.show = true;
    }
    // 状态编辑功能
    const handleUpdateStatus = (row: any) => {
      if (!row.id) {
        return
      }
      row.loading = true
      let params = {
        id: row.id,
        status: row.status
      }
      updateStatus(params)
      .then(res => {
        ElMessage({
          type: 'success',
          message: '状态变更成功'
        })
      })
      .catch(err => {
        ElMessage({
          type: 'error',
          message: '状态变更失败'
        })
      })
      .finally(() => {
        row.loading = false
      })
    }
    getTableData(true)
    return {
      Plus,
      Delete,
      Search,
      query,
      tableData,
      chooseData,
      loading,
      page,
      layer,
      handleSelectionChange,
      getTableData,
      handleDel,
      handleAdd,
      handleEdit,
      handleUpdateStatus
    };
  }
});
</script>

<style lang="scss" scoped>
.statusName {
  margin-right: 10px;
}
</style>
