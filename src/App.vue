<script setup lang="ts" >
  
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
//import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue';

const { t } = useI18n();

</script>

<template>
  <div class="app-container">

    <header class="app-header">
      <div class="header-content">
        <LanguageSwitcher />
      </div>
    </header>



    <main class="content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

 

<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* força ocupar toda a tela */
}

.content {
  flex: 1; /* faz o conteúdo crescer e empurra o footer para baixo */
}


.app-header {
  padding: 1rem 2rem; /* Espaçamento interno */
  background-color: #1a1a1a; /* Um fundo escuro para combinar com o tema */
}

.header-content {
  display: flex;
  justify-content: flex-end; /* Alinha o conteúdo (nosso seletor) à direita */
  max-width: 1200px; /* Largura máxima para o conteúdo */
  margin: 0 auto; /* Centraliza o container de conteúdo */
}
</style>

