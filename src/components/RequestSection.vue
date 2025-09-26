<script setup></script>

<template>
  <section class="mx-5 mt-7 xl:mt-15 pt-1" id="contacts">
    <h2 class="text-2xl xl:text-[3.125rem] text-white font-medium text-center">
      Оставь заявку и мы быстро <br />с вами свяжемся
    </h2>
    <p
      class="text-base xl:text-2xl text-white/70 font-normal text-center mt-6 xl:mt-9 px-13 xl:px-0 z-10"
    >
      Поможем с
      <span class="text-white">оформлением заказа</span> и ответим на
      <span class="text-white">все вопросы</span>
    </p>
    <div class="relative mt-8 xl:mt-10">
      <div
        class="absolute block top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] rounded-full bg-linear-to-r from-[#D1E3FF]/10 via-[#D1E3FF] to-[#D1E3FF]/10 [box-shadow:0px_0px_63.4px_2px_#2171f1] after:absolute after:block after:left-1/2 after:-translate-x-1/2 after:-top-4 after:rounded-[50%] after:h-[90px] after:w-[70%] after:bg-[#0075FF] after:filter after:blur-[40px] after:-z-10"
      ></div>
      <div
        class="h-fit p-6 xl:p-11 text-center relative z-0 before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 before:opacity-25 before:rounded-[1.25rem] xl:before:rounded-[1.875rem] before:shadow-[inset_0px_0px_5px_white] before:bg-[linear-gradient(135deg,_#002e5c_15%,_#13171c_40%)] before:z-10"
      >
        <form class="xl:w-[49.15%] md:w-1/2 flex mx-auto flex-col gap-y-4 relative z-20">
          <input
            class="h-14 xl:h-16 py-5 px-6 bg-[#C7E3FF]/20 border-none rounded-xl outline-hidden text-lg xl:text-2xl text-white placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white/30"
            type="text"
            placeholder="Имя"
            required
          />
          <input
            class="h-14 xl:h-16 py-5 px-6 bg-[#C7E3FF]/20 border-none rounded-xl outline-hidden text-lg xl:text-2xl text-white placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white/30"
            type="tel"
            placeholder="Номер телефона"
            required
          />
          <input
            class="h-14 xl:h-16 py-5 px-6 bg-[#C7E3FF]/20 border-none rounded-xl outline-hidden text-lg xl:text-2xl text-white placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white/30"
            type="email"
            placeholder="Почта"
            required
          />
        </form>
        <button
          class="relative z-20 mt-5 xl:mt-9 w-full xl:w-[49.15%] md:w-1/2 h-17 xl:h-19 border border-solid border-[#a0ccff] rounded-xl bg-[#0069e5] text-lg xl:text-[1.75rem] text-white font-normal shadow-[inset_0px_0px_20px_rgba(255,255,255,0.4)]"
          type="submit"
        >
          Отправить
        </button>
      </div>
      <p class="mt-4 text-center text-sm text-white">Связаться самостоятельно</p>
      <a class="block text-center text-sm text-white underline" href="tel:89255990016"
        >8-901-389-00-16 </a
      >
    </div>
  </section>
</template>

<style scoped></style>
