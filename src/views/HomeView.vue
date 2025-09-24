<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Innovation from '@/components/Innovation.vue';
import InteractiveServices from '@/components/Obejective.vue';
import ServicesProvided from '@/components/ServicesProvided.vue';
import PartnersSection from '@/components/Partners.vue';
import AboutUs from '@/components/AboutUs.vue';
import Obejective from '@/components/Obejective.vue';

const { t } = useI18n();
</script>

<template>
  <main class="home-content">
    <Innovation/>
    <Obejective />
    <ServicesProvided />
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