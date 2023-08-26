<template>
  <div class="layout-container">
    <div class="box">
      <el-row :gutter="20">
        <el-col v-for="row in data" :key="row.id" :lg="8" :md="8" :sm="12" :xs="24">
          <Card
            :row="row"
            background="#fff"
            thumb="http://blog.51weblove.com/wp-content/themes/2021062118010181/timthumb.php?src=http://blog.51weblove.com/wp-content/uploads/2018/12/2018120512375819.jpg&h=284&w=284&zc=1"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/card.vue'
export default defineComponent({
  components: {
    Card
  },
  setup() {
    const data = [
      { id: 1, name: 'vue-admin-box技术共享', des: '群号：912804007', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=6fxlga2ADcC28IUNJgn9QybExG3BdRTl&jump_from=webapi' },
      { id: 2, name: 'Vue3技术交流组', des: '群号：1059695979', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=pY8PpZi1JnTQLvvsaI4fQFaBE1dxBYrC&jump_from=webapi' },
      { id: 3, name: 'Vue前端技术栈', des: '群号：685641057', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=gd3t8OYL2T5oO8mZr8fyIS26LWdSmjH2&jump_from=webapi' }
    ]
    return {
      data
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
    .el-col {
      margin-bottom: 15px;
    }
  }
</style>