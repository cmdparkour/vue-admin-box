<template>
  <header>
    <div class="left-box">
      <!-- 收缩按钮 -->
      <div class="menu-icon" @click="opendStateChange">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
      <Breadcrumb />
    </div>
    <div class="right-box">
      <!-- 快捷功能按钮 -->
      <div class="function-list">
        <full-screen />
      </div>
      <!-- 用户信息 -->
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import fullScreen from './functionList/fullscreen.vue'
import Breadcrumb from './Breadcrumb.vue'
export default defineComponent({
  components: {
    fullScreen,
    Breadcrumb
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const isCollapse = computed(() => store.state.app.isCollapse)
    const opendStateChange = () => {
      store.commit('app/isCollapseChange', !isCollapse.value)
    }
    return {
      isCollapse,
      opendStateChange
    }
  }
})
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .left-box {
    height: 100%;
    display: flex;
    align-items: center;
    .menu-icon {
      width: 60px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      font-weight: 100;
      cursor: pointer;
      margin-right: 10px;
      &:hover {
        background-color: rgba(0,0,0,.025);
      }
      
    }
  }
  .right-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .function-list{
      :deep i {
        cursor: pointer;
        &:hover {
          background: rgba(0,0,0,.025);
        }
        &:focus {
          outline: none;
        }
      }
    }
    .user-info {
      margin-left: 20px;
    }
  }
</style>