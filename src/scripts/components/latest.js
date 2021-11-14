/* eslint-disable for-direction */
/* eslint-disable no-plusplus */
import { latestData } from '@data/components/latest'

export function fetchData() {
  const cards = latestData.map((piece, index) => {
    const card = document.createElement('div')
    const title = document.createElement('h4')
    const text = document.createElement('p')
    const link = document.createElement('a')

    card.classList.add(`latest__cards--${index + 1}`)

    title.innerHTML = piece.title
    title.classList.add('latest__title')

    text.innerHTML = piece.text
    text.classList.add('latest__text')

    link.innerHTML = piece.link
    link.classList.add('latest__link')

    const arr = Array.of(title, text, link)
    arr.forEach((item) => {
      card.appendChild(item)
    })

    return card
  })

  return cards
}

export function insertImages(images, data) {
  const imageChildren = images.children
  const length = data.length - 1

  // avoid overridden
  for (let i = length; i >= 0; i--) {
    data[i].prepend(imageChildren[i])
  }

  const fragment = document.createDocumentFragment()
  data.forEach((item) => {
    fragment.appendChild(item)
  })

  return fragment
}
