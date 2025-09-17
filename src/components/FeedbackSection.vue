<script setup>
import { ref } from 'vue'

const feedbackItems = ref([
  {
    name: 'Юлия Юрьевна',
    feedback:
      'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
  },
  {
    name: 'Юлия Юрьевна',
    feedback:
      'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
  },
  {
    name: 'Юлия Юрьевна',
    feedback:
      'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
  },
  {
    name: 'Юлия Юрьевна',
    feedback:
      'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
  },
  {
    name: 'Юлия Юрьевна',
    feedback:
      'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
  },
])

function getItemClass(index) {
  return index % 2 === 0 ? 'feedbacks_item__even' : 'feedbacks_item__odd'
}
</script>

<template>
  <section
    class="my-14 mx-5 py-4 xl:py-13 rounded-[1.25rem] relative z-0 shadow-[inset_0px_0px_50px_rgba(0,0,0,0.5)] bg-[linear-gradient(45deg,_#0075ff,_rgba(92,_167,_255,_0.2))] before:block before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:rounded-[1.25rem] before:bg-black/60 before:z-10"
    id="feedbacks"
  >
    <span class="mx-5 text-sm xl:text-xl font-normal text-white/80 relative z-20">Отзывы</span>
    <h2
      class="mt-5 mb-[3.1875rem] mx-5 text-3xl xl:text-[3.125rem] font-medium text-white relative z-20"
    >
      Что говорят<br />наши клиенты
    </h2>
    <ul
      class="feedback_list overflow-x-scroll px-10 xl:px-12 flex gap-x-5 relative z-20 min-h-[23.75rem]"
    >
      <li
        v-for="(item, index) in feedbackItems"
        :key="index"
        :class="getItemClass(index)"
        class="feedbacks_item w-50 xl:w-75 flex flex-col shrink-0"
      >
        <div>
          <div
            class="w-10 xl:w-[4.375rem] aspect-[1/1] flex items-center justify-center text-[#969696] text-lg xl:text-[1.875rem] font-normal rounded-[50%] bg-white relative z-2"
          >
            Ю
          </div>
          <p class="mt-4 text-xl xl:text-2xl font-medium text-white relative z-20">
            {{ item.name }}
          </p>
        </div>
        <p class="w-full mt-5 text-base xl:text-xl text-white whitespace-normal">
          {{ item.feedback }}
        </p>
      </li>
    </ul>
    <a
      class="block w-full px-5 xl:px-10"
      href="https://yandex.ru/maps/org/stella_polare/219434381766/reviews/?indoorLevel=3&ll=37.502687%2C55.741186&z=16"
    >
      <button
        class="mt-15 xl:mt-22 h-15 xl:h-22 w-full border-none rounded-xl xl:rounded-xl bg-white/10 flex gap-x-4 xl:gap-x-7 justify-center items-center relative z-20"
        type="button"
      >
        <span class="text-xl xl:text-[1.875rem] text-white font-normal">Написать свой отзыв</span>
        <img src="../svg/write.svg" class="w-5 xl:w-7 aspect-[1/1]" />
      </button>
    </a>
  </section>
</template>

<style scoped>
.feedback_list {
  scrollbar-width: none;
}

.feedbacks_item__odd {
  justify-content: flex-end;
}

.feedbacks_item__even {
  justify-content: flex-start;
}
</style>
