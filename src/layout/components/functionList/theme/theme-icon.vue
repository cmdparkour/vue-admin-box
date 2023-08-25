<template>
  <el-tooltip class="item" effect="dark" :content="tip" placement="top">
    <div class="theme-icon" @click="handleClick">
      <div class="theme-icon-sidebar">
        <div class="theme-icon-sidebar-logo" :style="{ 'background-color': logo }"></div>
        <div class="theme-icon-sidebar-menu" :style="{ 'background-color': menu }"></div>
      </div>
      <div class="theme-icon-content">
        <div class="theme-icon-content-header" :style="{ 'background-color': header }"></div>
        <div class="theme-icon-content-main" :style="{ 'background-color': main }">
          <div class="active" v-if="active === name">
            <i class="sfont system-success" :style="{'color': activeColor}"></i>
          </div>
        </div>
      </div>
      
    </div>
  </el-tooltip> 
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'default'
    },
    active: {
      type: String,
      default: ''
    },
    menu: {
      type: String,
      defualt: ''
    },
    logo: {
      type: String,
      defualt: ''
    },
    header: {
      type: String,
      defualt: ''
    },
    main: {
      type: String,
      defualt: ''
    },
    tip: {
      type: String,
      default: '默认菜单风格'
    },
    activeColor: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    // 点击事件，触发v-model修改active值
    const handleClick = () => {
      ctx.emit('update:active', props.name)
    }
    return {
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>
  .theme-icon {
    display: inline-flex;
    width: 50px;
    height: 50px;
    box-shadow: 0 1px 2.5px 0 rgba(0,0,0,.18);
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.12),0 0 6px rgba(0,0,0,0.04);
    outline: none;
    border-radius: 4px;
    overflow: hidden;
    &-sidebar{
      width: 18px;
      display: flex;
      flex-direction: column;
      &-logo{
        width: 20px;
        height: 10px;
        background-color: #263445;
      }
      &-menu{
        flex: 1;
        background-color: rgb(40, 65, 90);
      }
    }
    &-content{
      flex: 1;
      display: flex;
      flex-direction: column;
      &-header{
        height: 10px;
        background-color: #fff;
      }
      &-main{
        flex: 1;
        background-color: #f0f2f5;
        position: relative;
        .active {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            color: #000;
            font-weight: bold;
            font-size: 22px;
          }
        }
      }
    }

  }
  .theme-icon+.theme-icon{
    margin-left: 12px;
  }
</style>