<template>
  <div class="category">
    <div class="header-box">
      <h2>分类列表</h2>
      <el-input
        v-model="input"
        placeholder="请输入内容"
        @input="searchData(true)"
      ></el-input>
    </div>
    <ul
      class="list system-scrollbar"
      ref="listDom"
      :infinite-scroll-immediate="false"
      v-infinite-scroll="getCategoryData"
      style="overflow: auto"
    >
      <li
        v-for="item in list"
        :key="item.id"
        :class="{ active: item.id === active.id }"
        @click="changeActive(item)"
      >
        <span>{{ item.name }}</span>
      </li>
      <p class="load-tip" v-if="loading">加载中...</p>
      <p class="load-tip" v-if="nomore">数据加载完成</p>
    </ul>
  </div>
</template>

<script lang="ts">
import type { Ref } from "vue";
import { defineComponent, ref, inject } from "vue";
import { getCategory } from "@/api/table";
import { debounce } from "throttle-debounce";
export default defineComponent({
  setup() {
    const listDom: Ref<HTMLElement | null> = ref(null);
    const page = {
      index: 1,
      size: 30,
      total: 0,
    };
    let input = ref("");
    let list = ref([]);
    let firstLoading = ref(true);
    let loading = ref(true);
    let active: any = inject('active');
    let nomore = ref(false)
    const getCategoryData = (init: boolean) => {
      loading.value = true;
      if (init || firstLoading.value) {
        firstLoading.value = false;
        page.index = 1;
        listDom.value && (listDom.value.scrollTop = 0);
      } else {
        if (page.index * page.size >= page.total) {
          loading.value = false
          nomore.value = true
          return;
        }
      }
      let params = {
        page: page.index,
        pageSize: page.size,
        keyword: input.value,
      };
      getCategory(params)
      .then((res) => {
        if (page.index === 1) {
          list.value = res.data.list;
          active.value = list.value[0];
        } else {
          list.value = list.value.concat(res.data.list);
        }
        page.index += 1;
        page.total = res.data.pager.total;
      })
      .catch((err) => {
        page.index = 1
        page.total = 0
        list.value = []
      })
      .finally(() => {
        loading.value = false
      })
    };
    const searchData = debounce(300, getCategoryData);
    const changeActive = (row: any) => {
      active.value = row
    }
    getCategoryData(true);
    
    return {
      listDom,
      loading,
      nomore,
      input,
      list,
      active,
      getCategoryData,
      searchData,
      changeActive
    };
  },
});
</script>

<style lang="scss" scoped>
.category {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header-box {
    padding: 10px;
    display: flex;
    align-items: center;
    h2 {
      padding: 0;
      margin: 0;
      margin-right: 20px;
      font-size: 14px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 30px;
      line-height: 30px;
    }
    .el-input {
      flex: 1;
    }
  }
  .list {
    flex: 1;
    height: auto;
    margin: 0;
    padding: 0;
    display: block;
    li {
      height: 38px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
      transition: 0.2s;
      & + li {
        border-top: 1px solid #eee;
      }
      &:hover {
        background: #eee;
      }
      &.active {
        background: rgba(186, 220, 255, 0.4);
      }
      span {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 14px;
      }
    }
    .load-tip {
      font-size: 14px;
      color: #616161;
    }
  }
}
</style>