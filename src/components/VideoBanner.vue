<template>
  <section class="video-banner">
    <div class="banner-wrapper">

      <video class="banner-video" src="/bannerwetch.mp4" poster="/fallback-image.png" autoplay loop muted
        playsinline></video>

      <div class="banner-overlay"></div>

      <div class="banner-content">
        <div class="pre-title-container">
          <span class="line"></span>
          <p class="pre-title">
            {{ displayedText }}<span class="cursor">|</span>
          </p>
        </div>
        <h1 class="banner-title" style="white-space: pre-line">{{ t('videoBanner.mainTitle') }}</h1>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';


const { t } = useI18n();


const words = ["Inovações", "Design", "Sonhos"];


const displayedText = ref('');
const wordIndex = ref(0);
let charIndex = 0;
let isDeleting = false;
let timeoutId: number | undefined;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseDuration = 2000;

const typewriter = () => {
  const currentWord = words[wordIndex.value];
  if (isDeleting) {
    displayedText.value = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    displayedText.value = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    timeoutId = setTimeout(typewriter, pauseDuration);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex.value = (wordIndex.value + 1) % words.length;
    timeoutId = setTimeout(typewriter, 500);
  } else {
    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    timeoutId = setTimeout(typewriter, currentSpeed);
  }
};

onMounted(() => {
  if (words && words.length > 0) {
    timeoutId = setTimeout(typewriter, 500);
  }
});

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
</script>

<style scoped>
.video-banner {
  width: 100%;
  max-height: 67rem;
  overflow: hidden;
  position: relative;
}

.banner-wrapper {
  position: relative;
  width: 100%;
}



.banner-video {
  width: 100%;
  height: auto;
  display: block;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.694);
  z-index: 1;
}

.banner-content {
  position: absolute;
  top: 50%; /* Centered vertically */
  left: 50%;
  transform: translate(-50%, -50%); /* Centered both ways */
  z-index: 3;
  width: 90%;
  max-width: 1200px;
  text-align: left; /* Keep left alignment if desired, or center for banner */
}

.banner-title {
  font-size: 3.5rem; /* Reduced from 60px (~3.75rem) */
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.pre-title-container {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 1rem;
}

.line {
  display: block;
  width: 40px; /* Smaller line */
  height: 3px;
  background-color: #3b82f6;
  border-radius: 2px;
}

.pre-title {
  font-size: 1.25rem; /* Reduced from 2.7rem */
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cursor {
  display: inline-block;
  animation: blink 0.7s infinite;
  color: #3b82f6;
  font-weight: bold;
}

@media (max-width: 768px) {
  .video-banner {
    min-height: 85vh;
    background: url('/fallback-image.png') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-video {
    display: none;
  }


  .banner-wrapper {
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .banner-content {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  .pre-title-container {
    justify-content: center;
  }

  .pre-title {
    font-size: 1.8rem;
  }

  .line {
    width: 40px;
  }

  .banner-title {
    font-size: 2.8rem;
    line-height: 1.3;
    word-wrap: break-word;
  }
}

@media (max-width: 375px) {
  .banner-title {
    font-size: 2.2rem;
  }

  .pre-title {
    font-size: 1.6rem;
  }
}
</style>