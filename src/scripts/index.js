/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { fetchData as fetchInfoData } from '@scripts/components/info'
import {
  fetchData as fetchLatestData,
  insertImages,
} from '@scripts/components/latest'
import { fetchImagesWithWrapper } from '@utils/index'
// import _ from 'lodash'

document.addEventListener('DOMContentLoaded', () => {
  // cache nodes
  const infoContentEle = document.querySelector('.info__content')
  const infoImagesEle = document.querySelector('.info__images')
  const latestCardsEle = document.querySelector('.latest__cards')

  // info section
  const infoImages = fetchImagesWithWrapper('info')
  infoImagesEle.appendChild(infoImages)

  const infoData = fetchInfoData()
  infoContentEle.appendChild(infoData)

  // latest section
  const latestImages = fetchImagesWithWrapper('latest')
  const latestData = fetchLatestData()
  const latestFragment = insertImages(latestImages, latestData)

  latestCardsEle.appendChild(latestFragment)
})
