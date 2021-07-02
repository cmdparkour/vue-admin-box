/**
 * 支持父级，自定义父级，以及window作为父级
 * 使用示例：
 * 1. v-dragable
 * 2. v-dragable="'father'" // 使用父级作为父级
 * 3. v-dragable="'body'" // 使用body对象作为父级
 * 4. v-dragable="'#app'" // 使用id作为父级
 * 5. v-dragable="'.list'" // 使用class名作为父级
 * 3-5代表所有可被document.querySelector()解析的参数值
 **/
import type { Directive, DirectiveBinding } from 'vue'
interface Position {
  x: number,
  y: number
}
interface Mouse {
  down: Position,
  move: Position
}
interface ElType extends HTMLElement {
  __mouseDown__: any,
  __mouseUp__: any,
  __mouseMove__: any,
  __parentDom__: HTMLElement
}
const directive: Directive = {
  mounted: (el: ElType, binding: DirectiveBinding) => {
    setParentDom(el, binding)

    // 子级元素位置处理
    // 1. 获取父子元素当前位置
    let parentDomRect: DOMRect
    let elDomRect: DOMRect
    let mouseData: Mouse = {
      down: { x: 0, y: 0},
      move: { x: 0, y: 0 }
    }
    let mouseDown: boolean = false
    let elPosition: Position = {
      x: 0,
      y: 0
    }
    let bodyUserSelect: string = 'text'
    
    function handleMouseDown(e: MouseEvent) {
      if (e.button !== 0) {
        return
      }
      mouseData.down = {
        x: e.clientX,
        y: e.clientY
      }
      mouseDown = true
      parentDomRect = el.__parentDom__.getBoundingClientRect()
      elDomRect = el.getBoundingClientRect()
      bodyUserSelect = document.querySelector('body')!.style.userSelect
      document.querySelector('body')!.style.userSelect = "none"
    }
    function handleMouseMove(e: MouseEvent) {
      if (!mouseDown) {
        return
      }
      mouseData.move = {
        x: e.clientX,
        y: e.clientY
      }
      setPosition()
    }
    function handleMouseUp(e: MouseEvent) {
      if (mouseDown) {
        mouseDown = false
        document.querySelector('body')!.style.userSelect = bodyUserSelect
      }
    }
    // 用于设置el元素的Position位置
    function setPosition() {
      // 通过几何图形计算更佳，我就是通过几何画图计算出来的当前数据，使用者可以自行计算，得到这两个值
      const x = mouseData.move.x + elDomRect.x - parentDomRect.x - mouseData.down.x
      const y = mouseData.move.y + elDomRect.y - parentDomRect.y - mouseData.down.y
      // 进行x,y坐标边界处理判断
      if (x < 0) {
        elPosition.x = 0
      } else if (x > parentDomRect.width - elDomRect.width) {
        elPosition.x = parentDomRect.width - elDomRect.width
      } else {
        elPosition.x = x
      }
      if (y < 0) {
        elPosition.y = 0
      } else if (y > parentDomRect.height - elDomRect.height) {
        elPosition.y = parentDomRect.height - elDomRect.height
      } else {
        elPosition.y = y
      }
      // 渲染到真实dom属性上
      el.style.cssText += `
        position: absolute;
        z-index: 100;
        left: ${ elPosition.x }px;
        top: ${ elPosition.y }px;
      `
    }
    el.__mouseDown__ = handleMouseDown
    el.__mouseMove__ = handleMouseMove
    el.__mouseUp__ = handleMouseUp
    // 2. 监听拖拽事件
    el.addEventListener('mousedown', el.__mouseDown__)
    document.addEventListener('mousemove', el.__mouseMove__)
    document.addEventListener('mouseup', el.__mouseUp__)
  },
  updated(el, binding) {
    setParentDom(el, binding)
  },
  beforeUnmount(el: ElType) {
    // 避免重复开销，卸载所有的监听
    // 解决问题：多次创建新的实例 =》 监听不取消 =》 同时存在多个无用的监听，导致页面性能变差
    document.removeEventListener('mousedown', el.__mouseDown__)
    document.removeEventListener('mousemove', el.__mouseMove__)
    document.removeEventListener('mouseup', el.__mouseUp__)
  }
}
// 设置parentDom，供mounted和update使用
function setParentDom(el: ElType, binding: DirectiveBinding) {
  // 把以前的样式重置一下
  if (el.__parentDom__) {
    el.__parentDom__.style.position = 'static'
  }
  const array = [
    { name: 'father', dom: el.parentElement }
  ]
  
  // 获取父级元素
  let parentDom: HTMLElement | HTMLBodyElement
  // 以下if操作用于确保一定有一个parentDom
  if (binding.value) {
    const findArr = array.find((arr) => {
      return arr.name === binding.value
    })
    if (findArr && findArr.dom) {
      parentDom = findArr.dom
    } else {
      parentDom = document.querySelector(binding.value) || array[0].dom as HTMLElement || array[1].dom
    }
  } else {
    parentDom = array[0].dom as HTMLElement || array[1].dom
  }
  el.__parentDom__ = parentDom
  el.__parentDom__.style.position = 'relative'
}
export default directive