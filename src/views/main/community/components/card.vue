<template>
  <div class="card" @click="jump" :style="{ 'background': background }">
    <div class="thumb" v-if="thumb">
      <img :src="thumb">
    </div>
    <div class="content">
      <h3>{{ row.name }}</h3>
      <p>{{ row.des }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    row: {
      type: Object,
      default: () => {

      }
    },
    background: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
  },
  setup(props) {
    const jump = () => {
      window.open(props.row.link)
    }
    return {
      jump
    }
  }
})
</script>

<style lang="scss" scoped>
  .card {
    width: 100%;
    height: 130px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #c3c2c2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .thumb {
      width: 130px;
      height: 130px;
      max-width: 40%;
      overflow: hidden;
      img {
        width: 130px;
        height: 100%;
      }
    }
    .content{
      flex: 1;
      p {
        line-height: 25px;
        padding: 0 15px;
      }
    }
  }
</style>