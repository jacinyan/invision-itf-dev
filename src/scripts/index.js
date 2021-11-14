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
  const infoImagesEle = document.querySelector('.info__gallery')
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

  // event binding in latest
  const latestChildNodes = latestCardsEle.childNodes
  latestChildNodes.forEach((node) => {
    const nodeClassName = node.classList.value

    const nodeChildren = node.children
    const length = nodeChildren.length - 1
    const nodeFirstChild = nodeChildren[0]
    const nodeLastChild = nodeChildren[length]

    nodeFirstChild.addEventListener('click', () => {
      console.log(`image in ${nodeClassName} has been clicked`)
    })

    nodeLastChild.addEventListener('click', () => {
      console.log(`anchor in ${nodeClassName} has been clicked`)
    })
  })

  // event binding in info
  const infoChildNodes = infoImagesEle.childNodes

  infoChildNodes.forEach((node) => {
    const img = node.firstChild
    const modal = node.lastChild
    const modalContent = modal.lastChild

    img.addEventListener('click', () => {
      modal.style.display = 'block'
      modalContent.src = img.src
    })
  })
})
