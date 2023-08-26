<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>技术支持</span>
      </div>
    </template>
      <div class="box">
        <div class="item">
          <h4>免费服务</h4>
        </div>
        <div class="item">
          <p style="padding-left: 20px;">QQ交流群：912804007，大家可以在群内交流问题，UP在看到的时候也会第一时间回复，如果是框架设计上的问题，一般会在当天进行问题的解决。</p>
        </div>
        <div class="item">
          <h4>付费服务</h4>
        </div>
        <div class="my-item">
          <p style="padding-left: 20px;">1. 有偿提供前端技术开发支持，可支持：中后台、网站、APP、小程序等开发工作，按项目收费</p>
          <p style="padding-left: 20px;">2. 有偿提供技术咨询服务，按小时付费，100元/小时</p>
          <p style="padding-left: 20px;">3. 有偿提供前端疑难杂症解决服务，按小时付费，100元/小时</p>
          <p style="padding-left: 20px;">4. 联系方式：1031596654(QQ), cmdparkour(微信), 大家加好友时备注一下：vue-admin-box</p>
        </div>
      </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .box-card {
    margin-top: 20px;
    .card-header{
      text-align: left;
    }
    .box {
      .item {
        display: flex;
        align-items: center;
        * {
          margin-right: 20px;
        }
      }
      .my-item {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        p {
          margin-top: 10px;
        }
      }
    }
  }
</style>