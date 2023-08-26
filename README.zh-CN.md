<h1 align="center">vue-admin-box</h1>
<p align="center">
    <a href="https://github.com/vuejs/vue-next">
        <img src="https://img.shields.io/badge/vue3-3.0.5-brightgreen.svg" alt="vue">
    </a>
    <a href="https://github.com/element-plus/element-plus">
        <img src="https://img.shields.io/badge/elementPlus-1.0.2beta.42-brightgreen.svg" alt="element-plus">
    </a>
    <a href="https://github.com/vitejs/vite">
        <img src="https://img.shields.io/badge/vite-2.2.3-brightgreen.svg" alt="vite">
    </a>
    <a href="https://github.com/microsoft/TypeScript">
        <img src="https://img.shields.io/badge/typescript-4.1.3-brightgreen.svg" alt="typescript">
    </a>
    <a href="https://github.com/hsiangleev/element-plus-admin/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
    </a>
</p>

[English](./README.md) | 简体中文

## 简介

- [更新日志](./VERSION.md)
- 经过三个多月的迭代，于2021年8月10日，1.0版本正式发布，并附四个基础模板供大家使用
- 此开源项目为个人开发，不限制任何商业使用和个人研究，使用之前请先点个Star对我进行鼓励
- 利用此开源项目参与的一切违法、色情相关的活动均与本源码无关，请勿以身示法
- QQ交流群：912804007，有问题群里提，可及时解决

## 预览

- [demo国内](https://cmdparkour.gitee.io/vue-admin-box/)
- [demo外国](https://cmdparkour.github.io/vue-admin-box/dist/)
- [github地址](https://github.com/cmdparkour/vue-admin-box)
- [码云地址](https://gitee.com/cmdparkour/vue-admin-box)
- 国内推荐使用yarn或者cnpm进行安装，npm安装容易产生问题

## 基础模板
共四个基础模板，均适合从零研发使用，可在[github](https://github.com/cmdparkour/vue-admin-box)、[码云](https://gitee.com/cmdparkour/vue-admin-box)仓库中直接查看，模板如下所示
1. template-ts-i18n 基础模板，内含ts语法+国际化配置 [github](https://github.com/cmdparkour/vue-admin-box/tree/template-ts-i18n) [gitee](https://gitee.com/cmdparkour/vue-admin-box/tree/template-ts-i18n/) [demo](http://vue-admin-box-template.51weblove.com/ts-i18n/)
2. template-ts 基础模板，只含ts语法，国际化已去除 [github](https://github.com/cmdparkour/vue-admin-box/tree/template-ts) [gitee](https://gitee.com/cmdparkour/vue-admin-box/tree/template-ts/) [demo](http://vue-admin-box-template.51weblove.com/ts)
3. template-js-i18n 基础模板，js语法 + 国际化配置 [github](https://github.com/cmdparkour/vue-admin-box/tree/template-js-i18n) [gitee](https://gitee.com/cmdparkour/vue-admin-box/tree/template-js-i18n/) [demo](http://vue-admin-box-template.51weblove.com/js-i18n)
4. template-js 基础模板，js语法，国际化已去除 [github](https://github.com/cmdparkour/vue-admin-box/tree/template-js) [gitee](https://gitee.com/cmdparkour/vue-admin-box/tree/template-js/) [demo](http://vue-admin-box-template.51weblove.com/js)

## 介绍

vue-admin-box是一个免费并且开源的中后台管理系统模板。使用最新版本的vue3+vite+element-plus开发而成，目的是为了解决通用型的业务中后台系统复杂的配置。

#### 特色功能

- 适合中后台开发的路由配置、状态管理机制（状态默认支持本地存储）、已封装完善的axios及api管理机制
- 极方便扩展的主题配置功能，默认支持三种典型的中后台风格
- 简易配置的页面缓存功能，只需配置noCache属性，无需配置其他的任何属性，如组件名称，路由名称等等很多框架需要配置的东西
- 典型增删改查的三种业务表格，详情请查看“页面栏目”内的“业务表格”、“分类联动表格”、“树联动表格”
- 无路由跳转的刷新功能，支持缓存页面刷新，目前了解的多数框架都不支持缓存页面的刷新
- 方便扩展的国际化解决方案，并提供了两套非国际化的基础模板和两套国际化的基础模板（ts版本/js版本）
- 手写版本的各类自定义指令
- 已经过多个中后台业务检验过的表格公用组件及弹窗公用组件，详情请查看“页面栏目”内的“业务表格”、“分类联动表格”、“树联动表格”

#### 主要技术栈

- MVVM框架：vue v3
- 工程化管理：vite v2
- UI框架：element-plus
- 路由管理：vue-router v4
- 状态管理：vuex v4
- 数据请求：axios
- 实用工具库：@vueuse/core

## 使用

1. 获取源码资源包

   ```
   git clone https://github.com/cmdparkour/vue-admin-box.git
   ```

   

2. 安装依赖，国内推荐使用cnpm或tyarn，国外推荐使用npm或yarn

   ```
   npm install
   ```

   

3. 运行

   ```
   npm run dev 或 npm run start
   ```

   

4. 打包

   ```
   npm run build
   ```
   
## Partner project
* [Thinker-Aamin-Box - vue-admin-box的springboot后台，可使用java代码便捷创建vue界面](https://github.com/yirius/thinker-admin-box)
* [H5-dooring - 一款h5端页面可视化编辑器](http://h5.dooring.cn)
* [ant-simple-pro - 一款支持vue3.0，react，angular，typescript等多框架支持的中台前端解决方案](https://github.com/lgf196/ant-simple-pro)
* [vue-vben-admin - 使用了最新的vue3,vite2,TypeScript等主流技术开发，开箱即用的中后台前端解决方案](https://github.com/vbenjs/vue-vben-admin)


## 效果预览

<p align="center">
    <img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810174824.png">
    <img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810174848.png">
    <img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810174923.png">
    <img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810174940.png">
    <img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810175009.png">
</p>
