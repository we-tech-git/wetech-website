<script setup la
  components: { Footer },ng="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
//import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div class="app-container">
    <main class="content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

 

<style>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* força ocupar toda a tela */
}

.content {
  flex: 1; /* faz o conteúdo crescer e empurra o footer para baixo */
}
</style>