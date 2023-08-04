import { isBackMenu, systemTitle } from '@/config'

export function changeTitle(name) {
  document.title = isBackMenu ? `${name}-${systemTitle}` : `${t(name)}-${t(systemTitle)}`
}
