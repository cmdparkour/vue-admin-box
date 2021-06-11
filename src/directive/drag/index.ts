const drag = {
  mounted(el: HTMLDivElement) {
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
    header.addEventListener('mousedown', function(e) {
      // 获取dialog目前的位置，坐标, 以及屏幕当前的宽高
      // 一切初始数据的获取应该放置于此，避免其他如：宽度修改等一系列的影响
      data.window = {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
      data.dialog = dialog.getBoundingClientRect()
      data.mouse = {
        x: e.clientX,
        y: e.clientY
      }
      
      dragStatus = true
    })
    document.addEventListener('mousemove', function(e) {
      if (dragStatus) {
        data.drag = {
          x: e.clientX,
          y: e.clientY
        }
        setPosition()
      }
    })
    document.addEventListener('mouseup', function() {
      dragStatus = false
    })
    // 根据data来设置拖动后的位置
    function setPosition() {
      let top = data.drag.y - data.mouse.y + data.dialog.y
      let left = data.drag.x - data.mouse.x + data.dialog.x
      dialog.style.cssText += `margin: ${top}px 0 0 ${left}px !important`;
      // dialog.style.cssText += `position: absolute; top: ${top}px; left: ${left}px;`
      // dialog.style.marginTop = top + 'px'
      // dialog.style.marginLeft = left + 'px'
    }
  }
}

export default drag