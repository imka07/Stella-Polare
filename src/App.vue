<script setup>
import TheHeader from '@/components/TheHeader.vue'
import PerformanceSection from '@/components/PerformanceSection.vue'
import HitsSection from '@/components/HitsSection.vue'
import PhilosophySection from '@/components/PhilosophySection.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import AttentionSection from '@/components/AttentionSection.vue'
import FeedbackSection from '@/components/FeedbackSection.vue'
import LocationSection from '@/components/LocationSection.vue'
import QuestionsSection from '@/components/QuestionsSection.vue'
import CompanySection from '@/components/CompanySection.vue'
import RequestSection from '@/components/RequestSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div
    class="bg-[#090C11] py-[3.125rem] bg-[url(../images/bg.png)] bg-no-repeat bg-contain bg-bottom"
  >
    <div class="max-w-[1280px] mx-auto">
      <header class="mx-5">
        <TheHeader />
      </header>

      <main class="pt-12 pb-20 overflow-hidden">
        <PerformanceSection />
        <HitsSection />
        <PhilosophySection />
        <ServiceSection />
        <ProductsSection />
        <AttentionSection />
        <FeedbackSection />
        <LocationSection />
        <QuestionsSection />
        <CompanySection />
        <RequestSection />
      </main>

      <footer>
        <TheFooter />
      </footer>
    </div>
  </div>
</template>
