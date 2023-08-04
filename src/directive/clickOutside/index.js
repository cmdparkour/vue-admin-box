/**
 * v-clickOutside
 * 点击元素外部事件
 * 接收参数：function类型，点击外面时返回true,点击内部时返回false
 */
const directive = {
  mounted(el, binding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function'
    }
    el.__handleClick__ = function(e) {
      if (el.contains(e.target)) {
        binding.value(false)
      } else {
        binding.value(true)
      }
      
    }
    document.addEventListener('click', el.__handleClick__)
  },
  beforeUnmount(el) {
    document.removeEventListener('click', el.__handleClick__)
  }
}

export default directive