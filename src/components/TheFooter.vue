<script setup>
import Instagram from './icons/instagram.vue'
import Logo from './icons/logo.vue'
import Telegram from './icons/telegram.vue'
import Whatsapp from './icons/whatsapp.vue'
</script>

<template>
  <div class="mx-5 md:mx-9 xl:mx-13">
    <div
      class="px-5 py-3 xl:p-5 flex items-center justify-between bg-white/5 border border-solid border-[#BEDCFF]/20 border-opacity-20 rounded-[20px]"
    >
      <div class="flex flex-col gap-y-2 xl:gap-y-3.5">
        <div
          class="flex items-center gap-x-3 relative after:block after:w-[56%] after:h-[138%] after:inset-0 after:mt-[-4px] after:ml-[-7px] after:absolute after:bg-[#0052B3]/60 after:blur-2xl"
        >
          <Logo />
          <p
            class="z-10 text-base xl:text-2xl font-medium leading-5 xl:leading-7 text-transparent bg-clip-text bg-linear-to-r from-white to-[#ACD1FD]"
          >
            Stella <br />
            Polare
          </p>
        </div>
        <div class="flex gap-x-1">
          <svg
            class="flex items-center w-2 aspect-[1/1] xl:w-3"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 6C0.75 7.39239 1.30312 8.72774 2.28769 9.71231C3.27226 10.6969 4.60761 11.25 6 11.25C7.39239 11.25 8.72774 10.6969 9.71231 9.71231C10.6969 8.72774 11.25 7.39239 11.25 6C11.25 4.60761 10.6969 3.27226 9.71231 2.28769C8.72774 1.30312 7.39239 0.75 6 0.75C4.60761 0.75 3.27226 1.30312 2.28769 2.28769C1.30312 3.27226 0.75 4.60761 0.75 6ZM12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6ZM6.1095 3.744C5.2005 3.744 4.66425 4.434 4.66425 5.6205V6.4155C4.66425 7.59375 5.1915 8.262 6.1095 8.262C6.84375 8.262 7.34025 7.8225 7.40625 7.1985H8.3775V7.26825C8.3025 8.35425 7.362 9.1185 6.105 9.1185C4.53675 9.1185 3.65325 8.1165 3.65325 6.41625V5.6115C3.65325 3.91575 4.554 2.883 6.10575 2.883C7.3665 2.883 8.307 3.6735 8.3775 4.812V4.878H7.40625C7.34025 4.21875 6.83025 3.744 6.1095 3.744Z"
              fill="white"
              fill-opacity="0.7"
            />
          </svg>
          <span class="text-[0.5rem] xl:text-xs text-white text-opacity-70 font-normal leading-3"
            >2025 Stella Polare. Все права защищены</span
          >
        </div>
      </div>

      <ul class="inline-flex items-center gap-x-3.5">
        <li
          class="w-8 xl:w-12 aspect-[1/1] flex items-center justify-center bg-linear-to-b from-[#7DBAFF]/20 to-[#0353B1]/20 rounded-full"
        >
          <a
            href="https://t.me/stellapolare07"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-full h-full"
            aria-label="Telegram"
          >
            <Telegram />
          </a>
        </li>
        <li
          class="w-8 xl:w-12 aspect-[1/1] flex items-center justify-center bg-linear-to-b from-[#7DBAFF]/20 to-[#0353B1]/20 rounded-full"
        >
          <a
            href="https://wa.me/8-901-389-00-16 "
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-full h-full"
            aria-label="Whatsapp"
          >
            <Whatsapp />
          </a>
        </li>
        <li
          class="w-8 xl:w-12 aspect-[1/1] flex items-center justify-center bg-linear-to-b from-[#7DBAFF]/20 to-[#0353B1]/20 bg-opacity-20 rounded-full"
        >
          <a
            href="https://www.instagram.com/stellapolareshop"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-full h-full"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
    <!-- <ul class="mt-10 xl:mt-14 flex items-center justify-center gap-x-2 md:gap-x-3 xl:gap-x-5">
      <li>
        <a class="text-xs md:text-base xl:text-xl text-white/70 font-normal underline" href="#"
          >Поддержка</a
        >
      </li>
      <li>
        <a class="text-xs md:text-base xl:text-xl text-white/70 font-normal underline" href="#"
          >О компании</a
        >
      </li>
      <li>
        <a class="text-xs md:text-base xl:text-xl text-white/70 font-normal underline" href="#"
          >Отзывы</a
        >
      </li>
      <li>
        <a class="text-xs md:text-base xl:text-xl text-white/70 font-normal underline" href="#"
          >Рекомендации</a
        >
      </li>
      <li>
        <a class="text-xs md:text-base xl:text-xl text-white/70 font-normal underline" href="#"
          >Товары</a
        >
      </li>
    </ul> -->
  </div>
</template>
