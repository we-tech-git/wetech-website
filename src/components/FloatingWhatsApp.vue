<script setup lang="ts">
import svgSet from '@/utils/svgSet';
</script>

<template>
  <a
    href="https://wa.me/554899422614"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <div class="whatsapp-icon" v-html="svgSet.whatsappIcon"></div>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  background-color: #20ba59;
  transform: scale(1.1);
  box-shadow: 2px 2px 6px #777;
}

.whatsapp-icon {
  width: 35px;
  height: 35px;
  fill: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ensure the SVG inside fills the container */
:deep(.whatsapp-icon svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

@media (max-width: 768px) {
  .whatsapp-float {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }
  
  .whatsapp-icon {
    width: 28px;
    height: 28px;
  }
}
</style>
