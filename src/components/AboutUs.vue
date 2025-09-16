<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section id="about-us" class="about-us-section">
    <div class="container">
      <h2 class="about-us-title">{{ t('about_us.title') }}</h2>
      
      <div class="about-us-image">
        <img src="@/img/cuate.png" alt="Ilustração da equipe We Tech Hub">
      </div>
      
      <div class="about-us-text">
        <p v-html="t('about_us.description')"></p>
        <div class="buttons-wrapper">
          <a href="#contact" class="btn btn-primary">{{ t('about_us.button_contact') }}</a>
          <a href="#solutions" class="btn btn-secondary">{{ t('about_us.button_know_more') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ESTILOS GERAIS DA SEÇÃO */
.about-us-section {
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}

/* LAYOUT PARA DESKTOP (USANDO CSS GRID) */
.container {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* Duas colunas */
  grid-template-areas:
    "image title"
    "image text";
  align-items: center;
  gap: 80px;
  max-width: 1100px;
  width: 100%;
}

.about-us-title {
  grid-area: title; /* Posiciona o título na área 'title' do grid */
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about-us-image {
  grid-area: image; /* Posiciona a imagem na área 'image' */
  max-width: 700px;
}

.about-us-text {
  grid-area: text; /* Posiciona o texto na área 'text' */
}

.about-us-image img {
  width: 100%;
  height: auto;
  display: block;
}

.about-us-text p {
  font-size: 1.2rem;
  line-height: 1.5;
  max-width: 500px;
}

/* --- LAYOUT PARA MOBILE --- */
@media (max-width: 768px) {
  .container {
    display: flex; /* Mudamos para flexbox no mobile */
    flex-direction: column; /* Itens um embaixo do outro */
    text-align: center;
    gap: 30px;
  }

  /* A ordem Título -> Imagem -> Texto agora é automática! */

  .about-us-text p {
    margin: 0 auto;
  }

  /* BOTÕES UM EMBAIXO DO OUTRO NO MOBILE */
  .buttons-wrapper {
    flex-direction: column;
    align-items: center; /* Centraliza os botões */
    gap: 15px;
  }
}


/* --- ESTILOS GERAIS DOS BOTÕES --- */
.buttons-wrapper {
  margin-top: 30px;
  display: flex;
  gap: 20px;
}

.btn {
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  width: 220px;
}

.btn-primary {
  background-color: #007bff;
  color: #ffffff;
  border: 8px solid #007bff;
  font-size: 18px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.btn-secondary:hover {
  background-color: #ffffff;
  color: #0a0a1a;
}
</style>