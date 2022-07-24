/**
 * 指令，仅用于element-plus 中的 dialog 使用
 * 可基于窗口各种拖拽使用
 */
import type { Directive } from 'vue'
interface ElType extends HTMLDivElement {
  __mouseDown__: any,
  __mouseUp__: any,
  __mouseMove__: any,
  __sizeChange__: any
}
interface DataDialog {
  x: number
  y: number
  width: number
  height: number
  marginTop?: string|number
  top?: number
  bottom?: number
  left?: number
  right?: number
}
const drag: Directive = {
  mounted(el: ElType, binding) {
    if (binding.value) {
      handleElShow(el)
    }
  },
  updated(el, binding) {
    if (binding.value) {
      handleElShow(el)
    } else {
      handleElHide(el)
    }
  },
  beforeUnmount(el: ElType) {
    handleElHide(el)
  }
}

async function handleElShow(el: ElType) {
  // 防止时间太快，拿不到dom
  await myPromise()
  const dialog = el.querySelector('.el-dialog') as HTMLElement
  if (!dialog) {
    return
  }
  const header = el.querySelector('.el-dialog__header') as HTMLElement
  const dialogMask = el.querySelector('.el-overlay') as HTMLElement
  dialogMask.style.cssText += "overflow: hidden;"
  header.style.cursor = 'move'
  let dragStatus = false
  let data = { // 数据源，不变部分为：window信息、dialog信息、mouse初始值信息，可变部分为：拖拽坐标位移
    window: { // window信息
      width: 0,
      height: 0,
    },
    dialog: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      marginTop: ""
    } as DataDialog, // dialog信息
    mouse: { // 鼠标初始信息
      x: 0,
      y: 0
    },
    drag: { // 拖拽过程信息
      x: 0,
      y: 0
    }
  }
  // 所有的监听只为了修改data数据
  header.addEventListener('mousedown', mouseDown)
  document.addEventListener('mousemove', mouseMove)
  document.addEventListener('mouseup', mouseUp)
  window.addEventListener('resize', sizeChange)
  // 边界处理，防止拖动位置溢出
  function handlePosition() {
    if (data.mouse.x - data.drag.x >= data.dialog.x) {
      data.drag.x = data.mouse.x - data.dialog.x
    }
    if (data.drag.x - data.mouse.x >= data.window.width - (data.dialog.x + data.dialog.width)) {
      data.drag.x = data.mouse.x + data.window.width - data.dialog.x - data.dialog.width
    }
    if (data.mouse.y - data.drag.y >= data.dialog.y) {
      data.drag.y = data.mouse.y - data.dialog.y
    }
    if (data.drag.y - data.mouse.y >= data.window.height - (data.dialog.y + data.dialog.height)) {
      data.drag.y = data.mouse.y + data.window.height - data.dialog.y - data.dialog.height
    }
    setPosition()
  }
  // 根据data来设置拖动后的位置
  function setPosition() {
    let top = data.drag.y - data.mouse.y + data.dialog.y
    let left = data.drag.x - data.mouse.x + data.dialog.x
    dialog.style.cssText += `position: absolute; top: calc(${top}px - ${data.dialog.marginTop}); left: ${left}px;`
  }
  function mouseDown(e: any) {
    // 获取dialog目前的位置，坐标, 以及屏幕当前的宽高
    // 一切初始数据的获取应该放置于此，避免其他如：宽度修改等一系列的影响
    if (e.button !== 0) {
      return
    }
    data.window = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
    data.dialog = dialog.getBoundingClientRect()
    data.dialog.marginTop = window.getComputedStyle(dialog).marginTop
    data.mouse = {
      x: e.clientX,
      y: e.clientY
    }
    dragStatus = true
  }
  function mouseMove(e: any) {
    if (dragStatus) {
      data.drag = {
        x: e.clientX,
        y: e.clientY
      }
      dialogMask.style.userSelect = "none"
      handlePosition()
    }  
  }
  function mouseUp(e: any) {
    dialogMask.style.userSelect = "auto"
    dragStatus = false
  }
  function sizeChange(e: any) {
    // dialog.style.cssText += 'position: static';
  }
  function myPromise() {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
  }
  // 方便卸载使用
  el.__mouseDown__ = mouseDown
  el.__mouseUp__ = mouseUp
  el.__mouseMove__ = mouseMove
  el.__sizeChange__ = sizeChange
}

function handleElHide(el: ElType) {
  // 避免重复开销，卸载所有的监听
  // 解决问题：多次创建新的实例 =》 监听不取消 =》 同时存在多个无用的监听，导致页面卡顿
  document.removeEventListener('mousedown', el.__mouseDown__)
  document.removeEventListener('mousemove', el.__mouseMove__)
  document.removeEventListener('mouseup', el.__mouseUp__)
  window.removeEventListener('resize', el.__sizeChange__)
}

export default drag