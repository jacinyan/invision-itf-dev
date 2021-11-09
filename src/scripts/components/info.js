import { importAll } from '@utils/index'

const imgStyles = `width: 100%`
const wrapperStyles = 'object-fit: cover;'

function fetchImages() {
  const images = importAll(
    require.context('@/assets/images/info', true, /\.(png|jpe?g|svg)$/),
  )

  const nodes = images.map((image) => {
    const imgWrapper = document.createElement('div')
    const img = document.createElement('img')

    img.src = image
    img.style.cssText += imgStyles
    imgWrapper.style.cssText += wrapperStyles

    imgWrapper.appendChild(img)

    return imgWrapper
  })

  return nodes
}

export { fetchImages }
