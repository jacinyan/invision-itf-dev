/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

function _importAllByComp(comp) {
  const importAll = (r) => r.keys().map(r)

  switch (comp) {
    case 'info':
      return importAll(
        require.context(`@assets/images/info`, true, /\.(png|jpe?g|svg)$/),
      )
    case 'latest':
      return importAll(
        require.context(`@assets/images/latest`, true, /\.(png|jpe?g|svg)$/),
      )
    default:
      return null
  }
}

function _filterByDPR(nodes) {
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

function fetchImagesWithWrapper(component) {
  const imagePaths = _importAllByComp(component)

  const imageNodes = imagePaths.map((path) => {
    const imgWrapper = document.createElement('div')
    const img = document.createElement('img')

    if (component === 'info') {
      const modal = document.createElement('div')
      const span = document.createElement('span')
      const modalContent = document.createElement('img')

      modal.classList.add('modal')
      span.classList.add('close')
      span.innerHTML = '&times;'
      modalContent.classList = 'modal-content'

      modal.appendChild(span)
      modal.appendChild(modalContent)

      img.src = path
      img.alt = path

      imgWrapper.appendChild(img)
      imgWrapper.appendChild(modal)
      return imgWrapper
    }

    img.src = path
    img.alt = path
    imgWrapper.appendChild(img)

    return imgWrapper
  })

  const filteredNodes = _filterByDPR(imageNodes)
  const fragment = document.createDocumentFragment()
  filteredNodes.forEach((node) => {
    fragment.appendChild(node)
  })

  return fragment
}

export { fetchImagesWithWrapper }
