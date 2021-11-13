/* eslint-disable no-plusplus */
import { latestInfo } from '@data/components/latest'

export function fetchData() {
  const cards = latestInfo.map((piece) => {
    const title = document.createElement('h4')
    const text = document.createElement('p')
    const link = document.createElement('a')

    title.innerHTML = piece.title
    title.classList.add('title')

    text.innerHTML = piece.text
    text.classList.add('text')

    link.innerHTML = piece.link
    link.classList.add('link')

    const card = Array.of(title, text, link)

    return card
  })

  return cards
}
