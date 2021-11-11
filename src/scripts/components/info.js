import { importAll } from '@utils/index'
import { infoData } from '@data/components/info'

function fetchAllImages() {
  const imagePaths = importAll(
    require.context('@/assets/images/info', true, /\.(png|jpe?g|svg)$/),
  )

  const arrImages = imagePaths.map((path) => {
    const imgWrapper = document.createElement('div')
    const img = document.createElement('img')

    img.src = path
    img.alt = path
    imgWrapper.appendChild(img)

    return imgWrapper
  })

  return arrImages
}

function fetchData() {
  const title = document.createElement('h2')
  const paragraph1 = document.createElement('p')
  const subtitle = document.createElement('h4')
  const paragraph2 = document.createElement('p')

  title.innerHTML = infoData.title
  paragraph1.innerHTML = infoData.paragraph1
  subtitle.innerHTML = infoData.subtitle
  paragraph2.innerHTML = infoData.paragraph2

  const arrContent = Array.of(title, paragraph1, subtitle, paragraph2)
  const fragment = document.createDocumentFragment()
  arrContent.forEach((item) => {
    fragment.appendChild(item)
  })

  return fragment
}

export { fetchAllImages, fetchData }
