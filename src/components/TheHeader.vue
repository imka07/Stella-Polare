<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Logo from './icons/logo.vue'

const isMenuOpen = ref(false)
const isFixed = ref(false)
const scrollY = ref(0)

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToAndCloseMenu = (target) => {
  const element = document.querySelector(target)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth',
    })

    const matchingItem = menuItems.find((item) => item.href === target)
    if (matchingItem) {
      activeItem.value = matchingItem.id
      history.replaceState(null, null, target)
    }
  }
  isMenuOpen.value = false
}

const menuItems = [
  { id: 1, label: 'О компании', href: '#philosophy' },
  { id: 2, label: 'Товары', href: '#products' },
  { id: 3, label: 'Отзывы', href: '#feedbacks' },
]

const activeItem = ref(menuItems[0].id)
const setActive = (id) => {
  activeItem.value = id
}

const handleScroll = () => {
  const sections = menuItems
    .map((item) => ({
      id: item.id,
      element: document.querySelector(item.href),
      href: item.href,
    }))
    .filter((section) => section.element !== null)

  const scrollPosition = window.scrollY + 100
  let isInSection = false

  for (const section of sections) {
    const element = section.element
    const offsetTop = element.offsetTop
    const offsetHeight = element.offsetHeight

    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
      isInSection = true
      if (activeItem.value !== section.id) {
        activeItem.value = section.id
        if (window.location.hash !== section.href) {
          history.replaceState(null, null, section.href)
        }
      }
      break
    }
  }

  if (!isInSection && window.location.hash) {
    history.replaceState(null, null, ' ')
    activeItem.value = null
  }
}

const handleMobileScroll = () => {
  if (window.innerWidth >= 1024) return

  const newScrollY = window.scrollY
  const headerHeight = 125
  const threshold = 10

  if (newScrollY > headerHeight + threshold) {
    if (!isFixed.value) {
      isFixed.value = true
    }
  } else if (newScrollY < headerHeight - threshold) {
    if (isFixed.value) {
      isFixed.value = false
    }
  }

  scrollY.value = newScrollY
}

const handleClickOutside = (event) => {
  const menu = document.querySelector('.mobile-menu')
  const button = document.querySelector('.menu-button')

  if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
    isMenuOpen.value = false
  }
}

const addOutsideClickHandlers = () => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('touchstart', handleClickOutside)
}

const removeOutsideClickHandlers = () => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('touchstart', handleClickOutside)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', handleMobileScroll)
  addOutsideClickHandlers()

  if (window.location.hash) {
    const matchingItem = menuItems.find((item) => item.href === window.location.hash)
    if (matchingItem) {
      activeItem.value = matchingItem.id
      setTimeout(() => {
        scrollToAndCloseMenu(window.location.hash)
      }, 100)
    }
  }

  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', handleMobileScroll)
  removeOutsideClickHandlers()
})
</script>

<template>
  <div class="lg:flex items-center justify-between hidden">
    <a href="#">
      <div
        class="flex gap-x-3 items-center relative after:block after:w-[93.8%] after:h-[130%] after:inset-0 after:my-auto after:ml-[-3px] after:absolute after:bg-[#0052B3]/60 after:blur-2xl"
      >
        <Logo />
        <p
          class="z-10 text-2xl font-medium leading-7 text-transparent bg-clip-text bg-linear-to-r from-white to-[#ACD1FD]"
        >
          Stella
          <br />
          Polare
        </p>
      </div>
    </a>

    <ul
      class="z-30 fixed left-[50%] -translate-x-1/2 rounded-full flex gap-x-10 bg-white/10 px-[1.875rem] backdrop-blur-3xl"
    >
      <li
        v-for="item in menuItems"
        :key="item.id"
        class="py-5"
        :class="{
          'border-b-2 border-[#1E74F9]': activeItem === item.id,
          'border-none': activeItem !== item.id,
        }"
        @click="setActive(item.id)"
      >
        <a
          :href="item.href"
          class="text-xl font-normal h-full"
          :class="{
            'text-white': activeItem === item.id,
            'text-white/80': activeItem !== item.id,
          }"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>

    <a
      href="#contacts"
      class="px-6 py-5 border-[2px] border-solid border-white border-opacity-30 text-xl text-white font-medium rounded-full"
    >
      Связаться с нами
    </a>
  </div>

  <div
    class="lg:hidden mobile-header rounded-xl z-50 transition-transform duration-300 ease-in-out"
    :class="{
      'fixed top-0 left-0 bg-[#222429] m-5 w-[calc(100%-40px)] header-visible': isFixed,
      'relative header-hidden': !isFixed && scrollY > 120,
      relative: !isFixed && scrollY <= 120,
    }"
  >
    <div class="flex items-center justify-between bg-[#222429] rounded-xl px-5 py-4">
      <a href="#">
        <div class="flex gap-x-3 items-center">
          <Logo />
          <p
            class="z-10 text-base xl:text-2xl font-medium leading-5 xl:leading-7 text-transparent bg-clip-text bg-linear-to-r from-white to-[#ACD1FD]"
          >
            Stella
            <br />
            Polare
          </p>
        </div>
      </a>

      <button class="menu-button px-[20px] py-[10px] bg-white/10 rounded-lg" @click="openMenu">
        <svg
          class="transform transition-transform duration-300"
          :class="{ 'rotate-45': isMenuOpen }"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.83333 8.83333V14.6667C8.83333 14.8877 8.74554 15.0996 8.58926 15.2559C8.43297 15.4122 8.22101 15.5 8 15.5C7.77899 15.5 7.56702 15.4122 7.41074 15.2559C7.25446 15.0996 7.16667 14.8877 7.16667 14.6667V8.83333H1.33333C1.11232 8.83333 0.900358 8.74554 0.744078 8.58926C0.587797 8.43297 0.5 8.22101 0.5 8C0.5 7.77899 0.587797 7.56702 0.744078 7.41074C0.900358 7.25446 1.11232 7.16667 1.33333 7.16667H7.16667V1.33333C7.16667 1.11232 7.25446 0.900358 7.41074 0.744078C7.56702 0.587797 7.77899 0.5 8 0.5C8.22101 0.5 8.43297 0.587797 8.58926 0.744078C8.74554 0.900358 8.83333 1.11232 8.83333 1.33333V7.16667H14.6667C14.8877 7.16667 15.0996 7.25446 15.2559 7.41074C15.4122 7.56702 15.5 7.77899 15.5 8C15.5 8.22101 15.4122 8.43297 15.2559 8.58926C15.0996 8.74554 14.8877 8.83333 14.6667 8.83333H8.83333Z"
            fill="white"
          />
        </svg>
      </button>
    </div>

    <ul
      class="mobile-menu z-30 w-full px-[1.875rem] bg-[#222429] rounded-b-xl flex flex-col items-center overflow-hidden transition-all duration-300 absolute top-[63px]"
      :class="{ 'max-h-96': isMenuOpen, 'max-h-0': !isMenuOpen }"
    >
      <li class="mt-4 w-full text-center py-3">
        <a
          class="text-xl text-white text-opacity-80 font-normal block w-full"
          href="#philosophy"
          @click="scrollToAndCloseMenu('#philosophy')"
        >
          О компании
        </a>
      </li>
      <li class="w-full text-center py-3">
        <a
          class="text-xl text-white text-opacity-80 font-normal block w-full"
          href="#contacts"
          @click="scrollToAndCloseMenu('#contacts')"
        >
          Контакты
        </a>
      </li>
      <li class="w-full text-center py-3">
        <a
          class="text-xl text-white text-opacity-80 font-normal block w-full"
          href="#products"
          @click="scrollToAndCloseMenu('#products')"
        >
          Товары
        </a>
      </li>
      <li class="w-full text-center py-3">
        <a
          class="text-xl text-white text-opacity-80 font-normal block w-full"
          href="#feedbacks"
          @click="scrollToAndCloseMenu('#feedbacks')"
        >
          Отзывы
        </a>
      </li>
      <li
        class="mt-3 px-6 py-5 border-[2px] border-solid border-white border-opacity-30 rounded-full mb-[24px]"
      >
        <a
          class="block text-center text-xl text-white font-medium text-white"
          href="tel:89255990016"
        >
          Связаться с нами
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.max-h-96 {
  max-height: 24rem;
}

.max-h-0 {
  max-height: 0;
}

.mobile-header {
  will-change: transform;
  transition: transform 0.3s ease-out;
}

.header-visible {
  transform: translateY(0);
}

.header-hidden {
  transform: translateY(-100%);
}
</style>
