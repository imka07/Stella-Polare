<script setup>
import { ref } from 'vue'

const activeIndex = ref(null) // Индекс активного вопроса
const questions = ref([
  {
    title: 'Где заказывать товары?',
    content: 'В нашем Telegram-канале — самые свежие и актуальные новинки, акции и скидки. Напрямую в нашем ТГ боте — оформляйте заказ в пару кликов.',
  },
  {
    title: 'Как добраться до магазина?',
    content: '• Багратионовская (5 мин пешком) – выход №2.\n• На автомобиле: парковка у ТЦ Горбушка (платная).\n• На общественном транспорте: автобусы №135, № М7 до остановки «Багратионовский проезд»',
  },
  {
    title: 'Как работает гарантия?',
    content: '14 дней – обмен или возврат товара при выявлении заводского брака. На все технически сложные товары (смартфоны, планшеты, ПК, игровые приставки, акустические системы, бытовая техника и электроника) предоставляется гарантийный талон на 3 месяца с момента покупки',
  },
  {
    title: 'Как узнать какие товары сейчас есть в наличии?',
    content: 'Актуальные товары вы всегда можете посмотреть в нашем каталоге. Если не нашли нужную модель — напишите нашему менеджеру, он поможет подобрать или заказать. Рекомендуем бронировать технику заранее, так как количество товаров ограничено.',
  },
  {
    title: 'Есть ли мы на маркетплейсах?',
    type: 'links',
    links: [
      {
        label: 'Яндекс Маркет',
        href: 'https://market.yandex.ru/business--stella-polare-1/107778809',
        platform: 'yandex',
      },
      {
        label: 'Ozon',
        href: 'https://www.ozon.ru/seller/stella-polare-1459218/products/?miniapp=seller',
        platform: 'ozon',
      },
    ],
  },
])

function toggleQuestion(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section
    class="mt-17 md:mt-34 mx-5 pb-10 md:pb-27 md:flex justify-between items-start relative before:block before:absolute before:w-[41.25rem] before:h-[29.8125rem] before:left-[50%] before:-top-4 before:-translate-x-[50%] before:filter before:blur-[30.0625rem] before:bg-[radial-gradient(ellipse_at_center,_#4D9FFF_20%,_#0050AD_50%,_#002F66_80%)] before:z-1"
  >
    <div class="xl:w-[29.04%] relative z-10 xl:mx-5">
      <h2
        class="text-2xl xl:text-[2.5rem] font-medium mr-5 xl:mx-5 bg-[linear-gradient(to_right,_rgba(153,172,190,1)_0%,_rgba(224,240,255,1)_37%,_rgba(153,172,190,1)_63%,_rgba(50,61,72,1)_100%)] bg-clip-text text-transparent"
      >
        Часто задаваемые вопросы
      </h2>
      <p
        class="hidden md:block md:w-1/2 xl:w-[79.25%] xl:mx-5 mt-[2.1875rem] md:text-lg xl:text-2xl font-normal text-white/70"
      >
        Есть вопрос, на который не было ответа? Пиши в Telegram 
        <span
          class="text-2xl font-normal text-white/70 relative"
          href=""
          >@SPShopShop</span
        >
      </p>
    </div>
    <ul
      class="md:w-[90%] xl:w-[52.12%] flex flex-col gap-y-3 md:gap-y-4 relative z-10 mt-5 md:mt-0"
    >
      <li v-for="(item, index) in questions" :key="index" class="question-item">
        <div
          class="w-full h-15 xl:h-19 border border-solid border-white/30 rounded-2xl xl:rounded-[1.25rem] bg-white/10 inline-flex items-center justify-between p-5 xl:p-6 transition-transform duration-300 ease-linear"
          @click="toggleQuestion(index)"
        >
          <span class="w-[70%] text-lg xl:text-2xl xl:font-medium text-white">{{
            item.title
          }}</span>
          <button
            class="border-none bg-no justify-center inline-flex items-center transition-transform duration-100 ease-linear"
            type="button"
            :class="{ 'rotate-90': activeIndex === index }"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-transform duration-300 ease-linear"
              :class="{
                'rotate-0': activeIndex !== index,
                'rotate-180': activeIndex === index,
              }"
            >
              <path d="M10 2L10 18" stroke="#90969D" stroke-width="3" stroke-linecap="round" />
              <path d="M2 10L18 10" stroke="#90969D" stroke-width="3" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <div
          class="text-lg xl:text-2xl font-medium text-white/60 px-[1.5625rem] overflow-hidden transition-height duration-100 ease-linear"
          :class="{ 'mt-4': activeIndex === index }"
          :style="{
            maxHeight: activeIndex === index ? '100rem' : '0',
            opacity: activeIndex === index ? '1' : '0',
          }"
        >
          <template v-if="item.type === 'links'">
            <div class="flex gap-4">
              <a
                v-for="(link, i) in item.links"
                :key="i"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#13161a] hover:bg-white/80 active:bg-white/60 transition-colors"
              >
                <img
                  v-if="link.platform === 'yandex'"
                  src="https://www.ph4.ru/DL/LOGO_ICON/y/ya_market_.gif"
                  alt="Yandex Market"
                  width="20"
                  height="20"
                  style="display: inline-block; vertical-align: middle;"
                  aria-hidden="true"
                />
                <img
                  v-else-if="link.platform === 'ozon'"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ozon_logo_clear.svg/970px-Ozon_logo_clear.svg.png?20210512142931"
                  alt="Ozon"
                  width="40"
                  height="50"
                  style="display: inline-block; vertical-align: middle;"
                  aria-hidden="true"
                />
                {{ link.label }}
              </a>
            </div>
          </template>
          <template v-else>
            <div class="whitespace-pre-line">{{ item.content }}</div>
          </template>
        </div>
      </li>
    </ul>
    <p class="md:hidden mt-[2.1875rem] text-base text-white/70 text-center px-5 relative z-10">
      Есть вопрос, на который не было ответа? Пиши на почту
      <a class="text-base text-white/70 relative underline" href="mailto:example@example.com"
        >sp@gmail.com</a
      >
    </p>
  </section>
</template>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
  transition: transform 0.6s ease;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 1s ease;
}
</style>
