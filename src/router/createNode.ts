// 1. 用于解决keep-alive需要name的问题，动态生成随机name供keep-alive使用
// 2. 用于解决transition动画内部结点只能为根元素的问题，单文件可写多结点
import { defineComponent, createBlock, createVNode } from 'vue'

export function createNameComponent(componentFunction: Function) {
  return () => {
    return new Promise((resolve) => {
      const component = componentFunction()
      component.then((comp: any) => {
        const name = (comp.default.name || 'component') + '_' + Date.now()
        resolve(defineComponent({
          name,
          render: () => createBlock('div', {class: "el-main-box"}, [createVNode(comp.default)])
        }))
      })
    })
  }
}