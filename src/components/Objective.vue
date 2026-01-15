<template>
  <section class="objective-section">
    <div class="container">
      <h2 style="white-space: pre-line">{{ t('objective.sectionTitle') }}</h2>

      <div class="objective-grid">
        <div v-for="objective in objectives" :key="objective.key" class="objective-card">
          <div class="initial-view">
            <img :src="objective.icon" :alt="t(objective.titleKey)" />
            <h3>{{ t(objective.titleKey) }}</h3>
          </div>

          <div class="hover-view">
            <p>{{ t(objective.descriptionKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import flagIcon from '../img/bandeira1.png';
import targetIcon from '../img/alvo2.png';
import starIcon from '../img/estrela3.png';

const { t } = useI18n();

// ALTERADO: Nome da constante para 'objectives', pois é mais semântico
const objectives = [
  {
    key: 'mission',
    icon: flagIcon,
    titleKey: 'objective.items.mission.title',
    descriptionKey: 'objective.items.mission.description'
  },
  {
    key: 'vision',
    icon: targetIcon,
    titleKey: 'objective.items.vision.title',
    descriptionKey: 'objective.items.vision.description'
  },
  {
    key: 'values',
    icon: starIcon,
    titleKey: 'objective.items.values.title',
    descriptionKey: 'objective.items.values.description'
  }
];
</script>

<style scoped>
.objective-section {
  background-color: hsla(233, 100%, 5%, 1);
  padding: 80px 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 4rem;
  /* Reduced from 14.5rem */
}

.container h2 {
  margin-bottom: 4rem;
  /* Reduced from 15rem */
}


.objective-grid {
  display: flex;
  justify-content: center;
  gap: 32px;
  /* Reduced from 90px */
  flex-wrap: wrap;
}


.objective-card {
  background-color: #1a233a;
  border: 1px solid #2a3858;
  border-radius: 8px;
  width: 280px;
  /* Fixed standard width */
  height: 280px;
  /* Fixed standard height */
  padding: 24px;
  /* Reduced padding */
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
}

.initial-view,
.hover-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  transition: opacity 0.4s ease;
}

.initial-view {
  flex-direction: row;
  gap: 15px;
}

.hover-view {
  flex-direction: column;
  opacity: 0;
}

.objective-card:hover .initial-view {
  opacity: 0;
}

.objective-card:hover .hover-view {
  opacity: 1;
}

.initial-view img {
  height: 48px;
  /* Reduced from 87px */
  width: auto;
}

.initial-view h3 {
  font-size: 1.5rem;
  /* Reduced from 3.0rem */
  color: #ffffff;
  margin: 0;
  font-weight: 600;
}

.hover-view p {
  font-size: 1rem;
  /* Reduced from 2.0rem */
  color: #bdc4d1;
  line-height: 1.5;
  transition: color 0.3s ease;
}

.objective-card:hover {
  transform: translateY(-10px);
  border-color: #1e49a8;
  background-color: hsla(205, 100%, 28%, 1);
}

.objective-card:hover .hover-view p {
  color: #ffffff;
}


@media (max-width: 768px) {

  .objective-section {
    margin-bottom: 3rem;
    padding: 60px 20px;
  }

  .container h2 {
    margin-bottom: 3rem;
    font-size: 1.75rem;
    line-height: 1.3;
  }


  .objective-grid {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
  }


  .objective-card {
    width: 100%;
    max-width: 340px;
    height: 260px;
    padding: 24px;
  }

  .initial-view img {
    height: 40px;
  }

  .initial-view h3 {
    font-size: 1.5rem;
  }

  .hover-view p {
    font-size: 1rem;
  }
}
</style>