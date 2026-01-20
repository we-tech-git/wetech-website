<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

import Footer from './components/Footer.vue'
//import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import Contact from './components/Contact.vue';
import FloatingWhatsApp from './components/FloatingWhatsApp.vue';

const { t } = useI18n();

onMounted(() => {
  // Remove qualquer favicon existente
  const existingLinks = document.querySelectorAll("link[rel*='icon']");
  existingLinks.forEach(link => link.remove());

  // Cria novo favicon
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = '/we-white.svg';
  document.head.appendChild(link);
});

</script>

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
      <FloatingWhatsApp />

    </main>
    <Footer />

  </div>
</template>



<style scoped></style>
