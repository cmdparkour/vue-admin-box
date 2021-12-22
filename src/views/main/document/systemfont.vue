<template>
  <div class="layout-container">
    <h1>项目图标的说明</h1>
    <article>
      <section>
        <p>
          当前项目在开发过程中，使用到了iconfont的图标，对应的图标预览地址如下：
          <a target="_blank" href="https://at.alicdn.com/t/project/2570680/bf1af25a-2ccf-43ab-88de-799eb2e312ad.html?spm=a313x.7781069.1998910419.39">https://at.alicdn.com/t/project/2570680/bf1af25a-2ccf-43ab-88de-799eb2e312ad.html?spm=a313x.7781069.1998910419.39</a>
          <p>对于开发者来说，一般可以不关心它的存在，因为他并不影响你使用其他的iconfont图标库，只要你不使用同样的class名称。</p>
          <p>但是在某些情景下，开发者可能想要对项目内的图标进行一个统一管理，这时候这个东西就可以帮助到你了,因为iconfont不支付分享的原因，我们直接把链接粘出来了，有需要的小伙伴可以自行用name名去iconfont内进行一系列的检索，形成自己的iconfont库，然后再回到项目内把系统图标做一个批量替换就可以了。</p>
          <p>完整截图如下：</p>
          <img src="http://blog.51weblove.com/wp-content/uploads/2021/12/QQ截图20211222214625.png" alt="">
        </p>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .layout-container {
    article {
      padding: 0 20px;
      p {
        text-align: left;
      }
    }
  }
</style>