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
          <p v-html="t('aboutUs.description')"></p>
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
  font-size: 1.2rem;
  line-height: 1.5;
}

/* --- ESTILOS GERAIS DOS BOTÕES --- */
.buttons-wrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  align-items: flex-start;
}

.btn {
  padding: 1.0rem 6.0rem;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
}

.btn-primary {
  background-color: #007bff;
  color: #ffffff;
  border: 2px solid #007bff;
  font-size: 1.5rem;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 1.5rem;
}

.btn-secondary:hover {
  background-color: #ffffff;
  color: #0a0a1a;
}

/* --- LAYOUT PARA MOBILE (RESPONSIVO COM FLEXBOX) --- */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .about-us-content {
    flex-direction: column;
    text-align: center;
  }

  .buttons-wrapper {
    align-items: center;
    width: 100%; 
  
  }

   .btn {
    padding: 0.9rem 2.0rem;
    font-size: 1rem;       
    width: 100%;            
  }


}
</style>