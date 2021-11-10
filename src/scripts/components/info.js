import { importAll } from '@utils/index'

function fetchImages() {
  const images = importAll(
    require.context('@/assets/images/info', true, /\.(png|jpe?g|svg)$/),
  )

  const nodes = images.map((image) => {
    const imgWrapper = document.createElement('div')
    const img = document.createElement('img')

    img.src = image
    imgWrapper.appendChild(img)

    return imgWrapper
  })

  return nodes
}

export { fetchImages }
