<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
  <main class="home-content">
    <h1>{{ t('home.greeting') }}</h1>
    <p>{{ t('home.introduction') }}</p>

    

  </main>
</template>

<style>


</style>
