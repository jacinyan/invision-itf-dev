import { infoData } from '@data/components/info'

export function fetchData() {
  const title = document.createElement('h2')
  const paragraph1 = document.createElement('p')
  const subtitle = document.createElement('h4')
  const paragraph2 = document.createElement('p')

  title.innerHTML = infoData.title
  title.classList.add('info__title')

  paragraph1.innerHTML = infoData.paragraph1
  paragraph1.classList.add('info__paragraph--1')

  subtitle.innerHTML = infoData.subtitle
  subtitle.classList.add('info__subtitle')

  paragraph2.innerHTML = infoData.paragraph2
  paragraph2.classList.add('info__paragraph--2')

  const arrContent = Array.of(title, paragraph1, subtitle, paragraph2)
  const fragment = document.createDocumentFragment()
  arrContent.forEach((item) => {
    fragment.appendChild(item)
  })

  return fragment
}
