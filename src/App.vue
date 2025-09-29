<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

import Footer from './components/Footer.vue'
//import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import Contact from './components/Contact.vue';

const { t } = useI18n();

</script>1

<template>
  <div class="app-container">

    <header class="app-header">
      <div class="header-content">
        <LanguageSwitcher />
      </div>
    </header>



    <main class="content">

      <Header />

      <RouterView />
      <Contact />

    </main>
    <Footer />

  </div>
</template>



<style scoped></style>
