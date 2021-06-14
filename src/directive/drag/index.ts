interface ElType extends HTMLDivElement {
  __mouseDown__: any,
  __mouseUp__: any,
  __mouseMove__: any,
}
const drag = {
  mounted(el: ElType) {
    const dialog: any = el.querySelector('.el-dialog')
    const header: any = el.querySelector('.el-dialog__header')
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
        marginTop: 0
      }, // dialog信息
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
    // 根据data来设置拖动后的位置
    function setPosition() {
      let top = data.drag.y - data.mouse.y + data.dialog.y
      let left = data.drag.x - data.mouse.x + data.dialog.x
      dialog.style.cssText += `position: absolute; top: calc(${top}px - ${data.dialog.marginTop}); left: ${left}px;`
    }
    function mouseDown(e: any) {
      // 获取dialog目前的位置，坐标, 以及屏幕当前的宽高
      // 一切初始数据的获取应该放置于此，避免其他如：宽度修改等一系列的影响
      data.window = {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
      data.dialog = dialog.getBoundingClientRect()
      data.dialog.marginTop = dialog.style.marginTop
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
        setPosition()
      }  
    }
    function mouseUp(e: any) {
      dragStatus = false
    }
    // 方便卸载使用
    el.__mouseDown__ = mouseDown
    el.__mouseUp__ = mouseUp
    el.__mouseMove__ = mouseMove
  },
  beforeUnmount(el: ElType) {
    // 避免开销，卸载所有的监听
    document.removeEventListener('mousedown', el.__mouseDown__)
    document.removeEventListener('mousemove', el.__mouseMove__)
    document.removeEventListener('mouseup', el.__mouseUp__)
  }
}

export default drag