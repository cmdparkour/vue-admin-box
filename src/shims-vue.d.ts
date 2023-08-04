declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 国际化声明
declare module 'element-plus/dist/locale/*.mjs';
