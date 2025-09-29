<template>
  <section class="innovation-hero-section">
    <div class="content-wrapper">
      <h2 class="hero-title" v-html="t('innovations.title')"></h2>
      <p class="hero-description" v-html="t('innovations.description')"></p>
      <div class="button-group">
        <button class="btn btn-primary">{{ t('innovations.primary_button') }}</button>
        <button class="btn btn-secondary">{{ t('innovations.secondary_button') }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>

.innovation-hero-section {
  position: relative;
  background-color:hsla(233, 100%, 5%, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 400px;
  padding: 80px 20px;
  color: #ffffff;
  box-sizing: border-box;
}

.innovation-hero-section::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 150px;
  left: 0;
  top: -149px;
  background: linear-gradient(to bottom,
      rgba(6, 11, 40, 0) 0%,
      hsla(233, 100%, 5%, 1) 100%);
  z-index: 2;
}


.hero-title {
  margin-bottom: 5.5rem;
}

.hero-description {
  font-size: 2.5rem;
  max-width: 93rem;
  margin: 0 auto 9rem auto;
  color: #c0c8e7;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  padding: 1.4rem 8.5rem;
  border-radius: 50px;
  font-size: 1.7rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
  border: 2px solid #3b82f6;
}

.btn-primary:hover {
  background-color: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #c0c8e7;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease-in-out;
}

.btn-secondary:hover {
  background-color: white;
  border-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: white;
  color: hsla(233, 100%, 5%, 1);
}


/* MEDIA QUERIES PARA CELULARES */

@media (max-width: 768px) {

  .innovation-hero-section::before {
    display: none;
  }

  .content-wrapper {
    width: 100%;
    box-sizing: border-box;
  }

  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  .hero-description {
    font-size: 1.2rem;
    max-width: 100%;
    margin-bottom: 3rem;
  }

  .button-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .btn {
    width: 90%;
    padding: 1.2rem 2rem;
    font-size: 1.5rem;
    white-space: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .innovation-hero-section {
    padding: 60px 15px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .btn {
    font-size: 1.4rem;
  }
}
</style>