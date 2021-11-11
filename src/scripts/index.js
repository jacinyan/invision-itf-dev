/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { fetchAllImages, fetchData } from '@scripts/components/info'
import { filterByDPR } from '@utils/index'
import _ from 'lodash'

document.addEventListener('DOMContentLoaded', () => {
  const info = document.querySelector('.info')
  const content = document.querySelector('.info__content')

  const allImages = fetchAllImages()

  const filteredImages = filterByDPR(allImages)
  filteredImages.forEach((image) => {
    info.insertBefore(image, content)
  })

  const data = fetchData()
  content.appendChild(data)
})

window.addEventListener(
  'resize',
  _.debounce(() => {
    const imgWrappers = Array.from(
      document.querySelector('.info').children,
    ).slice(0, -1)

    const allImages = fetchAllImages()
    const filteredImages = filterByDPR(allImages)

    for (let i = 0; i < filteredImages.length; i++) {
      imgWrappers[i].children[0].src = filteredImages[i].children[0].src
      imgWrappers[i].children[0].alt = filteredImages[i].children[0].src
    }
  }, 300),
)
