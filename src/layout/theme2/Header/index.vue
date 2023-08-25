<template>
  <div class="container">
    <div class="logo-box">
      <Logo />
    </div>
    <Menu mode="horizontal" />
    <div class="right-box">
      <!-- 快捷功能按钮 -->
      <div class="function-list">
        <div class="function-list-item hidden-sm-and-down"><Full-screen /></div>
        <div class="function-list-item"><Word /></div>
        <div class="function-list-item"><SizeChange /></div>
        <div class="function-list-item hidden-sm-and-down"><Theme /></div>
        <div class="function-list-item hidden-sm-and-down"><Github /></div>
      </div>
      <!-- 用户信息 -->
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ $t('message.system.user') }}
            <i class="sfont system-xiala"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="showPasswordLayer">{{ $t('message.system.changePassword') }}</el-dropdown-item>
              <el-dropdown-item @click="loginOut">{{ $t('message.system.loginOut') }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <password-layer :layer="layer" v-if="layer.show" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Logo from '../../components/Logo/index.vue'
import Menu from '../../components/Menu/index.vue'
import PasswordLayer from '../../components/passwordLayer.vue'
import FullScreen from '../../components/functionList/fullscreen.vue'
import Word from '../../components/functionList/word.vue'
import SizeChange from '../../components/functionList/sizeChange.vue'
import Github from '../../components/functionList/github.vue'
import { useStore } from 'vuex'
const store = useStore()
const layer = reactive({
  show: false,
  showButton: true
})
// login out the system
const loginOut = () => {
  store.dispatch('user/loginOut')
}

const showPasswordLayer = () => {
  layer.show = true
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 60px;
  display: flex;
  padding-right: 10px;
}
.logo-box {
  width: 200px;
}
.right-box {
  display: flex;
  justify-content: center;
  align-items: center;
  .function-list{
    display: flex;
    .function-list-item {
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      :deep(i) {
        color: var(--system-header-text-color);
      }
    }
  }
  .user-info {
    margin-left: 20px;
    .el-dropdown-link {
      color: var(--system-header-breadcrumb-text-color);
    }
  }
}
</style>