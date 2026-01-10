<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import VideoBanner from '@/components/VideoBanner.vue';
import Innovation from '@/components/Innovation.vue';
import Objective from '@/components/Objective.vue';
import ServicesProvided from '@/components/ServicesProvided.vue';
import PartnersSection from '@/components/Partners.vue';
import AboutUs from '@/components/AboutUs.vue';


const { t } = useI18n();
</script>

<template>
  <main class="home-content">
    <VideoBanner/>
    <Innovation/>
    <Objective />
    <ServicesProvided />
    <PartnersSection />
    <AboutUs />
  </main>
</template>

<style scoped>



</style>