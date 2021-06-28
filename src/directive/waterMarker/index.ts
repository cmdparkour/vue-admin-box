/**
 * v-waterMarker可接收参数，均为非必填
 * { text: 'vue-admin-box', font: '16px Microsoft JhengHei', textColor: '#000' }
 */
import { Color, FontFamilyProperty, FontProperty } from 'csstype'
import type { Directive, DirectiveBinding } from 'vue'

const directive: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    binding.value ? binding.value : binding.value = {}
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor, )
  },
}

function addWaterMarker(str: string, parentNode: HTMLElement, font: FontProperty, textColor: Color) {
  // 水印文字，父元素，字体，文字颜色
  var can = document.createElement('canvas') as HTMLCanvasElement
  parentNode.appendChild(can)
  can.width = 200
  can.height = 150
  can.style.display = 'none'
  var cans = can.getContext('2d') as CanvasRenderingContext2D
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = font || '16px Microsoft JhengHei'
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'middle'
  cans.fillText(str ||'vue-admin-box' , can.width / 10, can.height / 2)
  parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

export default directive