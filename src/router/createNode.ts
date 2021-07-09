import { defineComponent, createBlock, createVNode } from 'vue'

export function createNameComponent(componentFunction: Function) {
  return () => {
    return new Promise((resolve) => {
      const component = componentFunction()
      component.then((comp: any) => {
        const name = (comp.default.name || 'component') + '_' + Date.now()
        console.log(name)
        resolve(defineComponent({
          name,
          render: () => createBlock('div', {class: "el-main-box"}, [createVNode(comp.default)])
        }))
      })
    })
  }
}