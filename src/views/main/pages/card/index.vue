<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <el-scrollbar height="100%" :noresize="true">
        <el-row :gutter="20">
          <el-col :md="8" :lg="4" :sm="12" :xs="24" v-for="(o, index) in 10" :key="o">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">编辑</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    function getData() {
      
    }
  }
})
</script>

<style lang="scss" scoped>
  .el-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .el-col{
    margin-bottom: 20px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
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