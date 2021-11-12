import { latestInfo } from '@data/components/latest'

export function fetchData() {
  const title = document.createElement('h4')
  const text = document.createElement('p')
  const button = document.createElement('p')

  title.innerHTML = latestInfo.title
  text.innerHTML = latestInfo.paragraph1

  button.innerHTML = latestInfo.paragraph2

  const arrContent = Array.of(title, text, button)
  const fragment = document.createDocumentFragment()
  arrContent.forEach((item) => {
    fragment.appendChild(item)
  })

  return fragment
}
