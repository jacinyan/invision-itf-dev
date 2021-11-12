/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { fetchData as fetchInfoData } from '@scripts/components/info'
import { fetchImages } from '@utils/index'
import _ from 'lodash'

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.info__content')
  const images = document.querySelector('.info__images')

  const infoImages = fetchImages('info')
  images.appendChild(infoImages)

  const infoData = fetchInfoData()
  content.appendChild(infoData)
})

// window.addEventListener(
//   'resize',
//   _.debounce(() => {
//     const imgWrappers = Array.from(
//       document.querySelector('.info').children,
//     ).slice(0, -1)

//     const allImages = fetchAllImages()
//     const filteredImages = filterByDPR(allImages)
//     const length = imgWrappers.length

//     for (let i = 0; i < length; i++) {
//       imgWrappers[i].children[0].src = filteredImages[i].children[0].src
//       imgWrappers[i].children[0].alt = filteredImages[i].children[0].src
//     }
//   }, 300),
// )
