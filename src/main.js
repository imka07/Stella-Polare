import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const productsNav = document.querySelector('.products_nav')
const chaptersProducts = document.querySelectorAll('.products_nav_item')
const productsList = document.querySelectorAll('.products_list')
chaptersProducts.forEach((item) => {
  item.addEventListener('click', () => {
    const itemRect = item.getBoundingClientRect()
    const containerRect = productsNav.getBoundingClientRect()
    const scrollPosition = itemRect.left - containerRect.left + productsNav.scrollLeft - 4
    productsNav.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })

    chaptersProducts.forEach((nav) => nav.classList.remove('active'))
    productsList.forEach((section) => section.classList.remove('active'))

    item.classList.add('active')
    const contentId = item.getAttribute('data-content')
    const activeContent = document.getElementById(contentId)
    activeContent.classList.add('active')

    activeContent.scrollTo(0, 0)
  })
})
