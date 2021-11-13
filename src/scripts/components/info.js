import { infoData } from '@data/components/info'

export function fetchData() {
  const title = document.createElement('h3')
  const paragraph1 = document.createElement('p')
  const subtitle = document.createElement('h4')
  const paragraph2 = document.createElement('p')

  title.innerHTML = infoData.title
  title.classList.add('title')

  paragraph1.innerHTML = infoData.paragraph1
  paragraph1.classList.add('p1')

  subtitle.innerHTML = infoData.subtitle
  subtitle.classList.add('sub')

  paragraph2.innerHTML = infoData.paragraph2
  paragraph2.classList.add('p2')

  const arrContent = Array.of(title, paragraph1, subtitle, paragraph2)
  const fragment = document.createDocumentFragment()
  arrContent.forEach((item) => {
    fragment.appendChild(item)
  })

  return fragment
}
