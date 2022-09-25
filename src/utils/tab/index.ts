/*
 * @Date: 2022-09-25 20:05:01
 * @Description: tab面板的操作方法
 */

/** 关闭当前标签 */
export const closeCurrentTab = () => {
  /** 拿到tab组件 */
  const tab = document.getElementById('vueAdminBoxTabCloseSelf')
  /** 触发tab事件点击 */
  tab?.click()
}

/** 关闭其他标签 */
export const closeOtherTab = () => {
  /** 拿到tab组件 */
  const tab = document.getElementById('vueAdminBoxTabCloseOther')
  /** 触发tab事件点击 */
  tab?.click()
}

/** 关闭所有标签 */
export const closeAllTab = () => {
  /** 拿到tab组件 */
  const tab = document.getElementById('vueAdminBoxTabCloseAll')
  /** 触发tab事件点击 */
  tab?.click()
}

/** 刷新当前标签 */
export const refreshCurrentTab = () => {
  /** 拿到tab组件 */
  const tab = document.getElementById('vueAdminBoxTabRefresh')
  /** 触发tab事件点击 */
  tab?.click()
}