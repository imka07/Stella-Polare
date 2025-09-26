<script setup>
import { computed, ref, } from 'vue'

const items = [
  {
    content: `
      <div class="hit-card bg-black bg-[url(../images/Iphone_hits.png)]">
        <div class="hit-card__header">
          <svg class="hit-card__icon" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_5_241)">
              <path d="M31.3285 41.3952C29.1316 43.506 26.733 43.1727 24.4241 42.1728C21.9806 41.1507 19.7389 41.1063 17.161 42.1728C13.9329 43.5504 12.2292 43.1505 10.3014 41.3952C-0.638101 30.2188 0.975923 13.1987 13.3949 12.5766C16.4212 12.7321 18.5284 14.2208 20.2994 14.3541C22.9446 13.8209 25.4777 12.2877 28.3022 12.4877C31.6872 12.7543 34.2427 14.0875 35.924 16.4872C28.9299 20.6422 30.5887 29.7744 37 32.3296C35.7222 35.6625 34.0634 38.9732 31.3061 41.4174L31.3285 41.3952ZM20.0752 12.4433C19.7389 7.48832 23.7964 3.39995 28.4591 3C29.1092 8.73261 23.2136 12.9987 20.0752 12.4433Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_5_241" x="0.274074" y="0.274074" width="39.4519" height="45.4519" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1.36296"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_241"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_241" result="shape"/>
              </filter>
            </defs>
          </svg>
          <span class="hit-card__title text-white">iPhone 16 Pro</span>
        </div>
        <a class="hit-card__action" href="https://t.me/stellapolare07">
          <button class="hit-card__button text-[#13171c] bg-white" type="button">Купить</button>
        </a>
      </div>
    `,
  },
  {
    content: `
      <div class="hit-card bg-gradient-to-l from-[#8D3367] to-[#2A1A3E] hit-card--dyson">
        <div class="hit-card__header flex-col items-center sm:items-start">
          <svg class="hidden md:block" width="130" height="49" viewBox="0 0 130 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_16_1500)">
              <path d="M18.3323 24.1416C18.3323 27.4261 15.7069 30.0537 12.4252 30.0537C9.14346 30.0537 6.51809 27.4261 6.51809 24.1416C6.51809 20.8571 9.14346 18.2295 12.4252 18.2295H18.3323V24.1416ZM24.8957 -0.163574H18.3323V11.792H12.4252C5.59922 11.792 0.0859375 17.3099 0.0859375 24.1416C0.0859375 30.9733 5.59922 36.4913 12.4252 36.4913C19.2511 36.4913 24.7644 30.9733 24.7644 24.1416V11.792L24.8957 -0.163574Z" fill="white"/>
              <path d="M90.1377 30.0532C93.4194 30.0532 96.0447 27.4257 96.0447 24.1412C96.0447 20.8567 93.4194 18.2291 90.1377 18.2291C86.8559 18.2291 84.2306 20.8567 84.2306 24.1412C84.3618 27.4257 86.9872 30.0532 90.1377 30.0532ZM77.9297 24.1412C77.9297 17.3094 83.443 11.7915 90.2689 11.7915C97.0949 11.7915 102.608 17.3094 102.608 24.1412C102.608 30.9729 97.0949 36.4908 90.2689 36.4908C83.443 36.4908 77.9297 30.9729 77.9297 24.1412Z" fill="white"/>
              <path d="M123.218 24.1412C123.218 20.9881 120.593 18.3605 117.442 18.3605C114.292 18.3605 111.667 20.9881 111.667 24.1412V35.9653H105.234V24.1412C105.234 17.3094 110.748 11.7915 117.574 11.7915C124.4 11.7915 129.913 17.3094 129.913 24.1412V35.9653H123.481C123.218 35.9653 123.218 25.7177 123.218 24.1412Z" fill="white"/>
              <path d="M62.837 19.937C61.9181 19.2801 62.1806 18.229 63.7558 17.8349C65.7249 17.3094 69.1378 17.7035 72.0257 19.0173L75.0449 14.8132C73.7322 13.7621 70.8443 12.317 66.6437 12.0542C66.6437 12.0542 59.5552 11.1346 56.6673 16.5211C56.6673 16.5211 54.1732 21.5135 59.1614 24.6666C62.1806 26.5059 67.4314 27.2942 69.1378 28.0825C70.4505 28.8708 70.0567 30.316 68.0877 30.7101C64.6747 31.4984 60.2116 29.5277 58.7676 28.4766L55.6172 32.8122C57.7175 34.3887 60.3429 35.8339 64.5434 36.4908C64.5434 36.4908 71.2381 37.6732 74.9137 33.0749C75.57 32.2866 78.5892 26.6373 72.5508 23.3528C69.4004 21.6449 64.4122 20.8566 62.837 19.937Z" fill="white"/>
              <path d="M32.6444 40.6953C32.9069 40.8267 35.9261 42.9288 38.814 42.9288C45.9025 43.0602 46.2963 35.7029 46.2963 33.995C44.9836 35.4402 42.227 36.3598 40.5205 36.3598C33.6945 36.3598 28.3125 31.1046 28.3125 24.2729V12.3174H34.7447V24.2729C34.7447 27.426 37.37 30.0536 40.5205 30.0536C43.6709 30.0536 46.2963 27.426 46.2963 24.2729V12.3174H52.7284V24.2729C52.7284 34.9146 53.2535 45.8191 42.8833 48.3153C35.1385 50.1546 29.6252 45.2936 29.2314 45.0308L32.6444 40.6953Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_16_1500">
                <rect width="130" height="49" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span class="hit-card__title text-white text-center sm:text-start w-full">Горячие новинки Dyson</span>
        </div>
        <a class="hit-card__action" href="https://t.me/stellapolare07">
          <button class="hit-card__button text-[#13171c] bg-white" type="button">Смотреть</button>
        </a>
      </div>
    `,
  },
  {
    content: `
      <div class="hit-card bg-white hit-card--macbook">
        <div class="hit-card__header">
          <svg class="hit-card__icon" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_16_1549)">
              <path d="M31.3285 41.3952C29.1316 43.506 26.733 43.1727 24.4241 42.1728C21.9806 41.1507 19.7389 41.1063 17.161 42.1728C13.9329 43.5504 12.2292 43.1505 10.3014 41.3952C-0.6381 30.2188 0.975923 13.1987 13.3949 12.5766C16.4212 12.7321 18.5284 14.2208 20.2994 14.3541C22.9446 13.8209 25.4777 12.2877 28.3022 12.4877C31.6872 12.7543 34.2427 14.0875 35.924 16.4872C28.9299 20.6422 30.5887 29.7744 37 32.3296C35.7222 35.6625 34.0634 38.9732 31.3061 41.4174L31.3285 41.3952ZM20.0752 12.4433C19.7389 7.48832 23.7964 3.39995 28.4591 3C29.1092 8.73261 23.2136 12.9987 20.0752 12.4433Z" fill="#090C11"/>
            </g>
            <defs>
              <filter id="filter0_d_16_1549" x="0.274074" y="0.274074" width="39.4519" height="45.4519" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1.36296"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_1549"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_1549" result="shape"/>
              </filter>
            </defs>
          </svg>
          <span class="hit-card__title text-[#090C11]">MacBook Air M3</span>
        </div>
        <a class="hit-card__action" href="https://t.me/stellapolare07">
          <button class="hit-card__button text-white bg-[#006BEA]" type="button">Купить</button>
        </a>
      </div>
    `,
  },
  {
    content: `
      <div class="hit-card hit-card--xiaomi bg-[url(../images/Xiaomi_hits_m.png)] sm:bg-[url(../images/Xiaomi_hits.png)] bg-cover bg-no-repeat">
        <div class="hit-card__header flex-col items-center sm:items-start">
          <span class="hit-card__title text-[#090C11]">Зима в уюте</span>
          <p class="hit-card__subtitle text-[#090C11]/60">С Xiaomi Mi Smart Kettle Pro</p>
        </div>
        <a class="hit-card__action" href="https://t.me/stellapolare07">
          <button class="hit-card__button text-[#090C11] bg-white" type="button">Заказать</button>
        </a>
      </div>
    `,
  },
]

const currentIndex = ref(0)

function showPrev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function showNext() {
  if (currentIndex.value < items.length - 1) {
    currentIndex.value++
  }
}

const transformStyle = computed(() => `translateX(-${currentIndex.value * 100}%)`)

// Swipe support for mobile
let startX = null
let isTouching = false

function onTouchStart(e) {
  isTouching = true
  startX = e.touches ? e.touches[0].clientX : e.clientX
}
function onTouchMove() {
  if (!isTouching) return
}
function onTouchEnd(e) {
  if (!isTouching) return
  const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
  const diff = endX - startX
  if (Math.abs(diff) > 40) {
    if (diff > 0) showPrev()
    else showNext()
  }
  isTouching = false
  startX = null
}
</script>

<template>
  <section class="pt-10 md:pt-18 xl:pt-29 mx-2 md:mx-5 relative z-10">
    <h2
      class="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium mx-2 md:mx-5 bg-[linear-gradient(to_right,_rgba(153,172,190,1)_0%,_rgba(224,240,255,1)_37%,_rgba(153,172,190,1)_63%,_rgba(50,61,72,1)_100%)] bg-clip-text text-transparent"
    >
      Топ-хиты
    </h2>
    <div class="relative w-full mt-5 md:mt-8 xl:mt-10">
      <button
        class="hidden sm:flex border-none w-10 h-10 rounded-full bg-white/80 absolute top-1/2 -translate-y-1/2 -left-2 md:-left-[17px] z-10 items-center justify-center"
        type="button"
        @click="showPrev"
        :disabled="currentIndex === 0"
        aria-label="Предыдущий"
      >
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.65584 15.6478C8.87621 15.4222 9 15.1163 9 14.7974C9 14.4784 8.87621 14.1725 8.65584 13.947L2.83731 7.99274L8.65584 2.03852C8.86996 1.81166 8.98844 1.50781 8.98576 1.19242C8.98308 0.877029 8.85946 0.575334 8.64152 0.352312C8.42358 0.129289 8.12876 0.00278607 7.82056 4.54345e-05C7.51236 -0.0026952 7.21543 0.118547 6.99374 0.33766L0.344159 7.14231C0.123794 7.36788 -3.63951e-07 7.67378 -3.50009e-07 7.99274C-3.36066e-07 8.3117 0.123794 8.6176 0.344159 8.84317L6.99374 15.6478C7.21417 15.8733 7.5131 16 7.82479 16C8.13648 16 8.43541 15.8733 8.65584 15.6478Z" fill="#101010"/>
        </svg>
      </button>
      <div
        class="overflow-hidden w-full"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @mousedown="onTouchStart"
        @mouseup="onTouchEnd"
        @mouseleave="onTouchEnd"
      >
        <ul
          class="flex transition-transform duration-500 ease-linear"
          :style="{ transform: transformStyle }"
        >
          <li
            v-for="(item, index) in items"
            :key="index"
            class="min-w-full"
          >
            <div class="relative" v-html="item.content"></div>
          </li>
        </ul>
      </div>
      <button
        class="hidden sm:flex border-none w-10 h-10 rounded-full bg-white/80 absolute top-1/2 -translate-y-1/2 -right-2 md:-right-[17px] z-10 items-center justify-center"
        type="button"
        @click="showNext"
        :disabled="currentIndex === items.length - 1"
        aria-label="Следующий"
      >
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#101010"/>
        </svg>
      </button>
      <!-- Mobile navigation dots -->
      <div class="flex sm:hidden justify-center mt-4 gap-2">
        <button
          v-for="(item, idx) in items"
          :key="'dot-' + idx"
          class="w-2 h-2 rounded-full"
          :class="currentIndex === idx ? 'bg-blue-500' : 'bg-gray-300'"
          @click="currentIndex = idx"
          aria-label="'Перейти к слайду ' + (idx + 1)"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Карточка хита */
.hit-card {
  width: 100%;
  border-radius: 1rem; /* rounded-xl */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem; /* gap-y-5 */
  position: relative;
  overflow: hidden;
  min-height: 320px;
  padding: 2rem 0 0 0;
  background-position: center bottom 10%;
  background-repeat: no-repeat;
  background-size: 65%;
}

@media (min-width: 640px) {
  .hit-card {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    min-height: 252px;
    padding: 0;
    gap: 2rem; /* md:gap-y-8 */
    background-position: right 10% center;
    background-size: 45%;
  }
}

@media (max-width: 639px) {
  .hit-card {
    min-height: 320px;
    background-size: 80%;
    background-position: center bottom 10%;
  }
}

/* Dyson */
.hit-card--dyson {
  background: linear-gradient(to left, #8D3367, #2A1A3E);
  position: relative;
}

.hit-card--dyson::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('../images/Dyson_hits.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 70%;
  border-radius: inherit;
  z-index: 0;
  opacity: 0.7;
}

@media (max-width: 639px) {
  .hit-card--dyson::before {
    background-size: 410px;
  }
}

/* Macbook */
.hit-card--macbook {
  background-color: #fff;
  background-image: url('../images/Macbook_hits.png');
  background-repeat: no-repeat;
  background-position: right 10% center;
  background-size: 41%;
  position: relative;
}

@media (max-width: 639px) {
  .hit-card--macbook {
    background-image: none;
  }
  .hit-card--macbook::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 68%;
    background-image: url('../images/Macbook_hits_v.png');
    background-repeat: no-repeat;
    background-size: 100% 68%;
    background-position: bottom;
    border-radius: inherit;
    z-index: 0;
    opacity: 0.7;
  }
}

/* Xiaomi */
.hit-card--xiaomi {
  background-position: right -80px center;
}

@media (min-width: 640px) {
  .hit-card--xiaomi {
    background-position: center;
  }
}

/* Контент карточки */
.hit-card__header {
  display: flex;
  gap: 0.75rem; /* gap-x-3 */
  z-index: 10;
  align-items: center;
  margin-left: 10.17%;
  width: 100%;
}

@media (min-width: 768px) {
  .hit-card__header {
    gap: 1.25rem; /* md:gap-x-5 */
  }
}

.hit-card__icon {
  width: 1.5rem;
  height: 1.75rem;
}

@media (min-width: 768px) {
  .hit-card__icon {
    width: 2rem;
    height: 2.25rem;
  }
}

@media (min-width: 1280px) {
  .hit-card__icon {
    width: 2.5rem;
    height: 2.75rem;
  }
}

.hit-card__title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.1;
  word-break: break-word;
}

@media (min-width: 640px) {
  .hit-card__title {
    font-size: 1.875rem;
  }
}

@media (min-width: 768px) {
  .hit-card__title {
    font-size: 2.25rem;
  }
}

@media (min-width: 1280px) {
  .hit-card__title {
    font-size: 2.5rem;
  }
}

.hit-card__subtitle {
  margin-top: 0.5rem;
  font-size: 1rem;
}

@media (min-width: 640px) {
  .hit-card__subtitle {
    font-size: 1.25rem;
  }
}

@media (min-width: 768px) {
  .hit-card__subtitle {
    font-size: 1.5rem;
  }
}

.hit-card__action {
  margin-top: 1.25rem;
  margin-left: 10.17%;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 640px) {
  .hit-card__action {
    justify-content: flex-start;
    margin-top: 0;
  }
}

.hit-card__button {
  border: none;
  border-radius: 9999px;
  width: 9rem;
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}

@media (min-width: 640px) {
  .hit-card__button {
    width: 9.5rem;
    font-size: 1.25rem;
  }
}

@media (max-width: 639px) {
  .hit-card__button {
    width: 90%;
    min-width: 120px;
    font-size: 1rem;
  }
}

</style>
