import { fetchImages } from '@scripts/components/info'

document.addEventListener('DOMContentLoaded', () => {
  const info = document.querySelector('.info')
  const contentOne = document.querySelector('.info__content--1')

  const nodes = fetchImages()

  nodes.forEach((node) => {
    info.insertBefore(node, contentOne)
  })
})
