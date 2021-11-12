import { infoData } from '@data/components/info'

export function fetchData() {
  const title = document.createElement('h2')
  const paragraph1 = document.createElement('p')
  const subtitle = document.createElement('h4')
  const paragraph2 = document.createElement('p')

  title.innerHTML = infoData.title
  paragraph1.innerHTML = infoData.paragraph1
  subtitle.innerHTML = infoData.subtitle
  paragraph2.innerHTML = infoData.paragraph2

  const arrContent = Array.of(title, paragraph1, subtitle, paragraph2)
  const fragment = document.createDocumentFragment()
  arrContent.forEach((item) => {
    fragment.appendChild(item)
  })

  return fragment
}
