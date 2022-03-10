import type { DefineComponent } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

/** @name 基础路由类型 */
export type Route = {
    /** @name 访问路径 */
    path: string
    /** @name 需要使用的组件 @description 两种类型，第一种是默认的Vue文件类型，第二种是通过createNameComponent搞出来的，凡是一个组件需要keep-alive,必须使用createNameComponent来搞定 */
    component: DefineComponent<{}, {}, any> | (() => Promise<DefineComponent<{}, {}, any>>)
    /** @name 基础元数据 */
    meta: Meta

    /** @name 路由名称，全局唯一，可以不填 */
    name?: string
    /** @name 需要重定向的地址，可选 */
    redirect?: string
    /** @name 总是显示菜单，可选 @description 大部分时候针对二级三级四级菜单的根结点，不设置的话，子元素只有一个的时候默认显示子元素，隐藏父元素 @default false */
    alwayShow?: boolean
    /** @name 是否隐藏菜单，可选 @description 这个属性通常用于详情页面、404、401页面等不需要显示在总菜单里面的 @default false */
    hideMenu?: boolean
    /** @name 路由子集，和Route类型一致的数组，可选 */
    children?: Route[]
} & RouteRecordRaw

/** @name 基础元数据的类型说明 */
export interface Meta {
    /** @name 标题 @description 可供很多地方使用，在国际化版本中使用i18n对应的值，非国际化版本中使用真实的路由值 */
    title: string
    /** @name 使用的icon的值，可选 @description 对应自己Iconfont链接库进来，通常只在一级菜单使用，但二级三级使用也没问题 */
    icon?: string
    /** @name 是否需要缓存页面，目前仅支持二级菜单缓存，多级菜单缓存会在未来支持，可选 @default false */
    cache?: boolean
    /** @name 任意值 @description 供自行扩展使用，但推荐在上面自己定义好 */
    [key: string]: any
}