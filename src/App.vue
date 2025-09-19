<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
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
      <RouterView />
      <Contact />
    </main>

    <Footer />

  </div>
</template>



<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}



.content {
  flex: 1;
  display: flex; 
  flex-direction: column;

}


.app-header {
  padding: 1rem 2rem;
  background-color: #101010;
  
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
</style>
