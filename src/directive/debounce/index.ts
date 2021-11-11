/**
 * v-debounce
 * 按钮防抖指令，可自行扩展至input
 * 接收参数：function类型
 */
import type { Directive, DirectiveBinding } from 'vue'
interface ElType extends HTMLElement {
  __handleClick__: any
}
const directive: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      console.error('callback must be a function')
      return;
    }
    let timer: NodeJS.Timeout|null = null
    el.__handleClick__ = function(e: ElType) {
      if (timer) {
        clearInterval(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 200)
    }
    el.addEventListener('click', el.__handleClick__)
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__)
  }
}

export default directive