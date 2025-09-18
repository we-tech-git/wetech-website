<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Helper para carregar imagens dinamicamente no v-for
// O Vite precisa disso para processar os caminhos das imagens corretamente
function getImageUrl(name: string) {
  return new URL(`../img/${name}`, import.meta.url).href;
}

const services = [
  {
    icon: 'icon1.png',
    titleKey: 'services.items.cloud.title',
    descriptionKey: 'services.items.cloud.description',
  },
  {
    icon: 'icon2.png',
    titleKey: 'services.items.apps.title',
    descriptionKey: 'services.items.apps.description',
  },
  {
    icon: 'icon3.png',
    titleKey: 'services.items.design.title',
    descriptionKey: 'services.items.design.description',
  },
  {
    icon: 'icon4.png',
    titleKey: 'services.items.desktop.title',
    descriptionKey: 'services.items.desktop.description',
  },
  {
    icon: 'icon5.png',
    titleKey: 'services.items.optimization.title',
    descriptionKey: 'services.items.optimization.description',
  },
  {
    icon: 'icon6.png',
    titleKey: 'services.items.mobile.title',
    descriptionKey: 'services.items.mobile.description',
  },
];
</script>

<template>
  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title">{{ t('services.mainTitle') }}</h2>

      <div class="services-grid">
        <div v-for="service in services" :key="service.titleKey" class="service-item">
          <img :src="getImageUrl(service.icon)" :alt="t(service.titleKey)" class="service-icon" />
          <h3 class="service-title">{{ t(service.titleKey) }}</h3>
          <p class="service-description">{{ t(service.descriptionKey) }}</p>
        </div>
      </div>

      <a href="#contact" class="cta-button">{{ t('services.ctaButton') }}</a>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  color: #ffffff;
  padding: 100px 20px;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  
  margin-bottom: 5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 2rem;
  margin-bottom: 7rem;
  align-items: stretch;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem; 
}

.service-icon {
  width: 80px; 
  height: 80px; 
  object-fit: contain;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  min-height: 4.5rem; 
}

.service-description {
  font-size: 1.2rem;
  color: #a0aec0;
  line-height: 1.6;
  max-width: 300px;
  flex-grow: 1;
}

.cta-button {
  display: inline-block;
  background-color: #007bff;
  color: #ffffff;
  padding: 1rem 9.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.5rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-bottom: 6rem;
}

.cta-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* --- DESIGN RESPONSIVO --- */
@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .service-title {
    min-height: auto; 
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .cta-button {
    width: 100%; 
    padding: 1rem; 
    font-size: 1.1rem; 
    box-sizing: border-box; 
  }

}
</style>