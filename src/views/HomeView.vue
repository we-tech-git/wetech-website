<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import PartnersSection from '@/components/Partners.vue';
import AboutUs from '@/components/AboutUs.vue';

const { t } = useI18n();
</script>

<template>
  <main class="home-content">
    <PartnersSection />
    <AboutUs />
  </main>
</template>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
}
</style>