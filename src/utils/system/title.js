import { systemTitle } from '@/config'

export function changeTitle(name) {
  document.title = `${name}-${systemTitle}`
}
