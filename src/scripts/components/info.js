import { importAll } from '@utils/index'

function fetchImages() {
  const images = importAll(
    require.context('@/assets/images/info', true, /\.(png|jpe?g|svg)$/),
  )

  const fragment = document.createDocumentFragment()

  console.log(images)

  // wrapper.appendChild(img)

  // fragment.appendChild(wrapper)

  return ''
}
fetchImages()
// document
//   .querySelector('.info')
//   .insertBefore(fetchImages(), document.querySelector('.info__content--1'))
