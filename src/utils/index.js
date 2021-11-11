/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

export const importAll = (r) => r.keys().map(r)

export function filterByDPR(nodes) {
  console.log(window.devicePixelRatio)
  const filtered = nodes.filter((node) => {
    const reg = /(\w+)@(\w+)/gi

    if (window.devicePixelRatio >= 2 && reg.test(node.innerHTML)) {
      return true
    } else if (window.devicePixelRatio < 2 && !reg.test(node.innerHTML)) {
      return true
    } else {
      return false
    }
  })

  return filtered
}
