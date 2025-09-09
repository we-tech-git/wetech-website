<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Lógica para a troca de idioma
const { locale } = useI18n();


const languages = [
  { code: 'pt-BR', name: 'Português' },
  { code: 'en', name: 'Inglês' }
] as const;


function selectLanguage(langCode: 'pt-BR' | 'en') {
  console.log('Função selectLanguage foi chamada com:', langCode);
  locale.value = langCode;
  console.log('O valor de "locale" agora é:', locale.value);
  isDropdownOpen.value = false; 
}


const isDropdownOpen = ref(false);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

</script>

<template>
  <div class="custom-switcher">
    <button @click="toggleDropdown" class="switcher-button">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<circle cx="24" cy="24" r="20" fill="#669df6"></circle><path fill="#317be4" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33	C37.97,18,42,22.03,42,27z"></path><path fill="#fff" d="M28,18v-2h-6v-2h-2v2h-7v2h10.499c-0.869,1.986-1.955,3.852-3.256,5.557	c-0.718-0.821-1.433-1.646-2.112-2.495l-1.35-1.688l-1.562,1.25l1.35,1.688c0.766,0.957,1.569,1.89,2.382,2.813	c-1.332,1.495-2.833,2.847-4.489,4.03l-0.047,0.034l1.213,1.59c1.719-1.228,3.281-2.63,4.676-4.174	c0.657,0.708,1.309,1.423,1.988,2.102l1.414-1.414c-0.72-0.72-1.414-1.475-2.109-2.229c1.675-2.136,3.039-4.511,4.067-7.064H28z"></path><path fill="#fff" d="M33.71,34.5h2.16L30.67,22h-2.34l-5.2,12.5h2.16l1.459-3.5h5.502L33.71,34.5z M27.583,29l1.917-4.6	l1.917,4.6H27.583z"></path>
</svg>
    </button>

    <ul v-if="isDropdownOpen" class="dropdown-menu">
      <li v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.code)">
        {{ lang.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

.custom-switcher {
 position: fixed;
  top: 2rem;
  left: 2rem;  
  z-index: 2000;
}

/* Estilo do botão que contém o ícone */
.switcher-button {
  background: linear-gradient(145deg, #163f7e, #7e60f8);
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
 
}

.switcher-button:hover {
  transform: scale(1.1);
}

.switcher-button svg {
  width: 24px;
  height: 24px;
  color: white;
}

/* O menu que aparece/desaparece */
.dropdown-menu {
  position: absolute;
  top: 110%; /* Posiciona um pouco abaixo do botão */
  left: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 8px 0;
  margin: 0;
  min-width: 120px;
  z-index: 1000; /* Garante que fique na frente de outros elementos */
}

/* Os itens da lista (Português, Inglês) */
.dropdown-menu li {
  padding: 10px 16px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>