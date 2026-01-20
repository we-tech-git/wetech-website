<template>
  <header class="main-header">
    <nav class="navbar">

      <div class="header-left">
        <LanguageSwitcher />
        <router-link to="/" class="logo-container">
          <img src="/WE_white (1).png" alt="We Tech logo" class="logo-icon" />
          <span class="logo-text">{{ t('header.logoText') }}</span>
        </router-link>
      </div>

      <ul class="nav-links" ref="navLinksContainer" @mouseleave="resetMagicLine">
        <li v-for="link in navLinks" :key="link.name">
          <router-link :to="link.path" @mouseenter="moveMagicLine">
            {{ link.name }}
          </router-link>
        </li>
        <li class="magic-line" ref="magicLine"></li>
      </ul>

      <div class="hamburger-menu" @click="toggleMobileMenu">
        <span>&#9776;</span>
      </div>
    </nav>

    <ul v-if="isMobileMenuOpen" class="mobile-nav-links">
      <li v-for="link in navLinks" :key="link.name">
        <router-link :to="link.path" @click="toggleMobileMenu">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed, onBeforeUnmount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import LanguageSwitcher from './LanguageSwitcher.vue';

const { t } = useI18n();
const route = useRoute();


const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};


const navLinks = computed(() => [
  { name: t('header.home'), path: '/' },
  { name: t('header.aboutUs'), path: '/#sobre-nos' },
  { name: t('header.contact'), path: '/#contact' },
]);


const navLinksContainer = ref<HTMLUListElement | null>(null);
const magicLine = ref<HTMLLIElement | null>(null);
const ensureMagicLineHidden = () => {
  if (magicLine.value) {
    magicLine.value.style.width = '0px';
    magicLine.value.style.opacity = '0';
  }
};

const updateMagicLine = () => nextTick(() => resetMagicLine());

const moveMagicLine = (event: MouseEvent) => {
  const targetLink = event.target as HTMLAnchorElement;
  if (magicLine.value && navLinksContainer.value) {
    const containerLeft = navLinksContainer.value.getBoundingClientRect().left;
    const targetLeft = targetLink.getBoundingClientRect().left;

    magicLine.value.style.width = `${targetLink.offsetWidth}px`;
    magicLine.value.style.left = `${targetLeft - containerLeft}px`;
    magicLine.value.style.opacity = '1';
  }
};

const resetMagicLine = () => {
  if (navLinksContainer.value) {
    const activeLink = navLinksContainer.value.querySelector('.router-link-exact-active') as HTMLAnchorElement;
    if (activeLink) {
      moveMagicLine({ target: activeLink } as unknown as MouseEvent);
      return;
    }
  }
  ensureMagicLineHidden();
};

onMounted(() => {
  updateMagicLine();
  window.addEventListener('resize', updateMagicLine);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMagicLine);
});

watch(
  () => [route.path, route.hash],
  () => updateMagicLine()
);
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  /* Added max-width */
  z-index: 1000;
  background-color: hsla(205, 100%, 28%, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  border-radius: 12px;
  padding: 12px 24px;
  /* Slightly adjusted padding */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.25rem;
  /* Reduced from 1.8rem */
  text-decoration: none;
}

.logo-icon {
  height: 28px;
  /* Slightly smaller logo */
}

.nav-links {
  position: relative;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
  /* Reduced gap */
}

.nav-links a {
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  /* Reduced from 1.6rem */
  font-weight: 500;
  padding: 8px 4px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #3b82f6;
}

.nav-links a.router-link-exact-active {
  color: #ffffff;
}


.magic-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: #3b82f6;
  border-radius: 4px;
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
  pointer-events: none;
}


.hamburger-menu {
  display: none;
}

.mobile-nav-links {
  list-style: none;
  padding: 10px 0;
  margin-top: 10px;
  background-color: hsla(205, 100%, 28%, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.mobile-nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 8px 20px;
}



/* --- RESPONSIVIDADE PARA MOBILE --- */
@media (max-width: 768px) {
  .main-header {
    width: 90%;
  }

  .nav-links {
    display: none;
  }

  .hamburger-menu {
    display: block;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
  }
}

@media (min-width: 769px) {
  .mobile-nav-links {
    display: none;
  }
}
</style>