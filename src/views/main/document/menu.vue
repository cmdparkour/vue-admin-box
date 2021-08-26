<template>
  <div class="layout-container">
    <h1>路由菜单配置</h1>
    <article>
      <section>
        <p>路由配置是整个系统的核心部分，整个架构的设计基于动态路由的概念，把路由分为了<b>基础路由</b>（包括了404路由、401路由、登录路由）+<b>页面路由</b>（文档路由、首页、组件、页面等等）。
        基础路由是在系统一进入就进行初始化好的，而页面路由是在系统登录之后才会加入到页面中，有效地杜绝了未授权访问等问题。</p>
        <p>所有路由需要关注的核心页面为：<b>router/index.ts</b>（js版本为router/index.js文件）, 在这个文件里面包含了路由的所有配置，包括了登录拦截、动态路由添加的逻辑等。</p>
        <p>当你需要由后台来控制路由的时候，这时候你就可以先请求后台路由接口，然后拿后台生成的权限路由数据来对比本地动态路由<b>asyncRoutes变量</b>，然后即可生成你自己的路由，包括了自定义名称、自定义路径 、自定义图标、自定义路由层级等。</p>
        <h3>常用配置参数清单</h3>
        <ul>
          <li>path: 路由地址，必填项</li>
          <li>component: 使用的组件，必填项</li>
          <li>redirect: 重定向地址，非必填</li>
          <li>alwayShow: 布尔类型，当子级只有一个时，是否展示父级菜单，true表示总是展示，false表示不展示，默认为false</li>
          <li>meta: 基础元数据，是一个对象，包括了下列属性
            <ul>
              <li>title: 非国际化版本为<b>标题</b>，国际化版本为可供<b>$t函数</b>调用的<b>对象层级字符串</b>，必填项</li>
              <li>icon: 图标，非必填</li>
              <li>cache: 布尔类型，是否开启缓存功能，true表示开启，false表示关闭，默认为false, 非必填，目前仅支持在二级菜单上使用，暂不支持三级及三级以上菜单使用（社区难题，有待解决）</li>
              <li>自定义元数据，用于在其它定制化场景使用</li>
            </ul>
          </li>
          <li>children: 子路由（如果需要子路由，父级的comonent需要为Layout组件/Menu组件（在router/modules/menu.ts文件中有示范）/自定义父级组件）</li>
        </ul>
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
  article {
    padding: 20px 50px;
    text-align: left;
    p {
      text-align: left;
      line-height: 29px;
      text-indent: 2em;
      margin-top: 0;
    }
    ul {
      li {
        margin-bottom: 20px;
        ul {
          margin-top: 20px;
        }
      }
    }
  }
</style>