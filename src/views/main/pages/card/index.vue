<template>
  <div class="layout-container">
    <div class="layout-container-table" v-loading="loading">
      <div class="box" ref="box">
        <el-scrollbar height="100%">
          <el-row :gutter="20">
            <el-col :lg="4" :md="8" :sm="12" :xs="24" v-for="row in list" :key="row.id">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img :src="row.image" class="image">
                <div style="padding: 14px;">
                  <span>{{ row.title }}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ row.time }}</time>
                    <el-button type="text" class="edit-button" @click="showEditor">编辑</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-empty description="空空如也~" style="height: 500px;" v-show="list.length === 0"></el-empty>
        </el-scrollbar>
      </div>
      
      <el-pagination
        v-model:current-page="page.index"
        class="system-page"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        :page-size="page.size"
        :page-sizes="[10, 20, 50, 100]"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import type { Ref } from 'vue'
import { defineComponent, ref, reactive, onMounted } from 'vue'
import { Page } from '@/components/table/type'
import { getData } from '@/api/card'
export default defineComponent({
  name: 'card',
  setup() {
    let loading = ref(true)
    let list = ref([])
    let box: Ref<HTMLDivElement> = ref() as any
    let page: Page = reactive({
      index: 1,
      size: 20,
      total: 0
    })
    const getListData = (init: Boolean) => {
      loading.value = true
      let params = {
        page: page.index,
        pageSize: page.size
      }
      getData(params)
      .then(res => {
        page.total = res.data.pager.total
        list.value = res.data.list
      })
      .catch(err => {
        list.value = []
        page.index = 1
        page.total = 0
      })
      .finally(() => {
        loading.value = false
      })
    }
    // 分页相关：监听页码切换事件
    const handleCurrentChange = (val: Number) => {
      page.index = val
      getListData(false)
    }
    // 分页相关：监听单页显示数量切换事件
    const handleSizeChange = (val: Number) => {
      page.size = val
      page.index = 1
      getListData(false)
    }
    onMounted(() => {
      box.value.addEventListener('resize', (e) => {
        console.log(12)
      })
    })
    const showEditor = () => {

    }
    getListData(true)
    return {
      list,
      page,
      loading,
      box,
      handleCurrentChange,
      handleSizeChange,
      showEditor
    }
  }
})
</script>

<style lang="scss" scoped>
  * {
    text-align: left;
  }
  .el-col{
    margin-bottom: 20px;
  }
  .box {
    height: calc(100% - 50px);
    
    margin-bottom: 15px;
    :deep(.is-horizontal) {
      display: none;
    }
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .edit-button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>