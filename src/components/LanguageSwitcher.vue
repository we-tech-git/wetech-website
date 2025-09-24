<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import svgIcons from '@/utils/svgSet';

const { locale } = useI18n();


const languageIcon = svgIcons.languageIcon;

const languages = [
  { code: 'pt-BR', name: 'Português' },
  { code: 'en', name: 'Inglês' }
] as const;

function selectLanguage(langCode: 'pt-BR' | 'en') {
  locale.value = langCode;
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
      <span v-html="languageIcon"></span>
    </button>

    <ul v-if="isDropdownOpen" class="dropdown-menu">
      <li v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.code)">
        {{ lang.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.custom-switcher {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 2000;
  width: 150px;
  
}

.switcher-button {
  background-color: hsla(212, 64%, 27%, 1);
  border: none;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
}

.switcher-button:hover {
  transform: scale(1.05);
  background-color: #3a4b5e;
}


.switcher-button :deep(svg) {
  width: 28px;
  height: 28px;
  fill: white;
}

.dropdown-menu {
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 8px 0;
  margin: 0;
  width: 100%;
  z-index: 1000;
  animation: fadeInDown 0.2s ease-out;
}

.dropdown-menu li {
  padding: 10px 16px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
  text-align: center;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>