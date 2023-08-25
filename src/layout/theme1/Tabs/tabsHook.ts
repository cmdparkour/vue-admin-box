
/** 设置和拉取tab数据的主方法 */
const tabsHook = {
  setItem: function(arr: object[]) {
    localStorage.setItem('tabs', JSON.stringify(arr))
  },
  getItem: function() {
    return JSON.parse(localStorage.getItem('tabs') || '[]')
  }
}
export default tabsHook
