<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { ProjectEntry } from '@/components/projects/projectsData'

const props = defineProps<{ projects: ProjectEntry[] }>()

const router = useRouter()
const hovered = ref<number>(-1)
const { locale, t } = useI18n()

const cards = computed(() =>
    props.projects.map((project) => ({
        slug: project.slug,
        src: project.card.src,
        title: project.card.title,
        text: project.card.text,
    }))
)

const pickLocale = (text: { en: string; pt: string }) =>
    locale.value.startsWith('pt') ? text.pt : text.en
</script>

<template>
    <section class="gallery">
        <div class="gallery__head">
            <p class="eyebrow">We Tech</p>
            <h1>{{ t('projectsPage.galleryTitle') }}</h1>
            <p class="lead">{{ t('projectsPage.gallerySubtitle') }}</p>
        </div>

        <div class="gallery__grid">
            <article v-for="(card, index) in cards" :key="card.slug" class="gallery__card"
                :style="{ backgroundImage: `url(${card.src})` }" @mouseenter="hovered = index"
                @mouseleave="hovered = -1" @click="router.push(`/projects/${card.slug}`)">
                <div class="gallery__overlay" :class="{ 'gallery__overlay--visible': hovered === index }"></div>
                <div class="gallery__content">
                    <h3>{{ pickLocale(card.title) }}</h3>
                    <p>{{ pickLocale(card.text) }}</p>
                    <button class="ghost-btn">{{ t('projectsPage.viewDetails') }}</button>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.gallery {
    padding: 4rem 1.5rem 5rem;
    background: linear-gradient(160deg, #041226 0%, #0a2f55 100%);
    color: #f5f7fb;
}

.gallery__head {
    max-width: 760px;
    margin: 0 auto 2rem;
    text-align: center;
}

.eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.85rem;
    color: #7cc6ff;
    margin-bottom: 0.5rem;
}

.gallery h1 {
    font-size: 2.4rem;
    margin: 0 0 0.75rem;
    letter-spacing: -0.03em;
}

.lead {
    color: #c9d7eb;
    font-size: 1.05rem;
    line-height: 1.6;
}

.gallery__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.gallery__card {
    position: relative;
    min-height: 260px;
    border-radius: 18px;
    overflow: hidden;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: flex-end;
}

.gallery__card:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 55px rgba(0, 0, 0, 0.35);
}

.gallery__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(4, 18, 38, 0) 0%, rgba(4, 18, 38, 0.75) 90%);
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.gallery__overlay--visible {
    opacity: 1;
}

.gallery__content {
    position: relative;
    padding: 1.5rem;
    z-index: 1;
}

.gallery__content h3 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
}

.gallery__content p {
    margin: 0 0 1rem;
    color: #d6e4f7;
    line-height: 1.4;
}

.ghost-btn {
    padding: 0.6rem 1.1rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: transparent;
    color: #f5f7fb;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.gallery__card:hover .ghost-btn {
    background: #f5f7fb;
    color: #0b2f55;
    border-color: #f5f7fb;
}

@media (max-width: 640px) {
    .gallery h1 {
        font-size: 2rem;
    }

    .gallery__card {
        min-height: 220px;
    }
}
</style>
