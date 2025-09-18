<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
    <section id="partners" class="partners-section">
        <div class="container">
            <h2 class="partners-title">{{ t('partners.title') }}</h2>

            <div class="logos-wrapper">
                <img src="@/img/bluebg.png" alt="Logo da empresa parceira Blue">
            </div>
        </div>
    </section>
</template>
=
<style scoped>
/* ESTILOS GERAIS DA SEÇÃO */
.partners-section {
    background-color: hsla(223, 37%, 24%, 1);
    padding: 50px ;
    width: 100%;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.partners-title {
    color: #ffffff;
    text-align: center;
}

/* CONTAINER DO LOGOTIPO */
.logos-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.logos-wrapper img {
    object-fit: contain;
    filter: brightness(0) invert(1) contrast(0.5);
    opacity: 0.6;
}



/* --- LAYOUT PARA MOBILE --- */
@media (max-width: 768px) {
    .partners-section {
        padding: 40px 20px;
    }

    .partners-title {
        font-size: 1.5rem;
    }

    .logos-wrapper img {
        max-height: 30px;
    }
}
</style>