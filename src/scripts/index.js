/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { fetchData as fetchInfoData } from '@scripts/components/info'
import { fetchData as fetchLatestData } from '@scripts/components/latest'
import { fetchImages } from '@utils/index'
// import _ from 'lodash'

document.addEventListener('DOMContentLoaded', () => {
  // cache nodes
  const infoContentWrapper = document.querySelector('.info__content')
  const infoImageWrapper = document.querySelector('.info__images')
  const latestCardWrapper = document.querySelector('.latest__cards')

  // info section
  const infoImages = fetchImages('info')
  infoImageWrapper.appendChild(infoImages)

  const infoData = fetchInfoData()
  infoContentWrapper.appendChild(infoData)

  // latest section
  const latestImages = fetchImages('latest')
  const latestData = fetchLatestData()

  const latestImageArray = Array.from(latestImages.children)
  for (let i = 0; i < latestImageArray.length; i++) {
    const piece = latestData[i]
    piece.forEach((nodes) => {
      latestImageArray[i].appendChild(nodes)
    })
  }

  const fragment = document.createDocumentFragment()
  latestImageArray.forEach((arr) => {
    fragment.appendChild(arr)
  })
  latestCardWrapper.appendChild(fragment)
})
