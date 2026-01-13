<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section id="sobre-nos" class="about-us-section">
    <div class="container">
      <h2 class="about-us-title">{{ t('aboutUs.title') }}</h2>

      <div class="about-us-content">
        <div class="about-us-image">
          <img src="@/img/cuate.png" alt="Ilustração da equipe We Tech Hub">
        </div>

        <div class="about-us-text">
          <p style="white-space: pre-line">{{ t('aboutUs.description') }}</p>
          <div class="buttons-wrapper">
            <a href="#contact" class="btn btn-primary">{{ t('aboutUs.buttonContact') }}</a>
            <a href="#solutions" class="btn btn-secondary">{{ t('aboutUs.buttonKnowmore') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us-section {
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* --- LAYOUT PARA DESKTOP (COM FLEXBOX) --- */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  max-width: 1100px;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 7rem;
}

.about-us-title {
  text-align: center;
  width: 100%;
}

.about-us-content {
  display: flex;
  align-items: center;
  gap: 80px;
  width: 100%;
}

.about-us-image {
  flex: 1;
  max-width: 600px;
  align-items: center;
  display: flex;
}

.about-us-text {
  flex: 1.2;
}

.about-us-image img {
  width: 100%;
  height: auto;
  display: block;
}

.about-us-text p {
  font-size: 1rem;
  /* Reduced from 1.2rem */
  line-height: 1.6;
  color: #d1d5db;
  /* Softer white for reading */
}

/* --- ESTILOS GERAIS DOS BOTÕES --- */
.buttons-wrapper {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  /* Changed to row for better desktop layout */
  gap: 16px;
  align-items: center;
}

.btn {
  padding: 0.75rem 2rem;
  /* Reduced padding */
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  /* Standardized font size */
}

.btn-primary {
  background-color: #007bff;
  color: #ffffff;
  border: 2px solid #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
}

.btn-secondary:hover {
  background-color: #ffffff;
  color: #0a0a1a;
}

/* --- LAYOUT PARA MOBILE (RESPONSIVO COM FLEXBOX) --- */
@media (max-width: 768px) {
  .about-us-section {
    padding: 60px 20px;
  }

  .container {
    padding: 0;
    gap: 40px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .about-us-title {
    font-size: 2rem;
  }

  .about-us-content {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .about-us-image {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .buttons-wrapper {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;
  }

  .btn {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .about-us-title {
    font-size: 1.75rem;
  }
}
</style>