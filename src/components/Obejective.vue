<template>
  <section class="objective-section">
    <div class="container">
      <h2 v-html="t('objective.sectionTitle')"></h2>
      
      <div class="objective-grid">
        <div 
          v-for="objective in objectives" 
          :key="objective.key" 
          class="objective-card" >
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
    // ALTERADO: Chaves de tradução para 'objective'
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
/* ALTERADO: Seletor principal */
.objective-section {
  background-color: hsla(233, 100%, 5%, 1);
  padding: 80px 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 14.5rem; 
}
    
.container h2 {
  margin-bottom: 15rem;
}

/* ALTERADO: Seletor do grid */
.objective-grid {
  display: flex;
  justify-content: center;
  gap: 90px;
  flex-wrap: wrap;
}

/* ALTERADO: Seletor do card */
.objective-card {
  background-color: #1a233a;
  border: 1px solid #2a3858;
  border-radius: 8px;
  width: 40rem;
  height: 40rem;
  padding: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
}

.initial-view, .hover-view {
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
  height: 87px;
  width: auto;
}

.initial-view h3 {
  font-size: 3.0rem;
  color: #ffffff;
  margin: 0;
}

.hover-view p {
  font-size: 2.0rem;
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
  /* ALTERADO: Seletor na media query */
  .objective-section {
    margin-bottom: 5rem;
    padding: 40px 10px;
  }
  
  .container h2 {
    margin-bottom: 5rem;
    font-size: 1.8rem;
  }
  
  /* ALTERADO: Seletor na media query */
  .objective-grid {
    flex-direction: column;
    align-items: center;  
    gap: 30px;            
  }

  /* ALTERADO: Seletor na media query */
  .objective-card {
    width: 90%;       
    max-width: 350px;    
    height: 280px;     
    padding: 20px;
  }

  .initial-view img {
    height: 45px;     
  }

  .initial-view h3 {
    font-size: 2rem;  
  }

  .hover-view p {
    font-size: 1.1rem;
  }
}
</style>