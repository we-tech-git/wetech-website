<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ProjectEntry } from '@/components/projects/projectsData'

const props = defineProps<{
    project: ProjectEntry
    onBack: () => void
}>()

const { locale, t } = useI18n()

const pick = (text: { en: string; pt: string }) =>
    locale.value.startsWith('pt') ? text.pt : text.en

const info = computed(() => props.project.info)
</script>

<template>
    <section class="project">
        <div class="project__top">
            <button class="link-btn" @click="onBack">{{ t('projectsPage.back') }}</button>
            <div class="project__meta">
                <p class="eyebrow">{{ t('projectsPage.publishedOn') }}</p>
                <p class="date">{{ pick(info.projectDate) }}</p>
            </div>
        </div>

        <header class="project__header">
            <h1>{{ pick(info.title) }}</h1>
            <p class="project__lead">{{ pick(info.firstDescription) }}</p>
        </header>

        <div class="project__banner">
            <img :src="info.urlBanner" :alt="pick(info.title)" />
        </div>

        <div class="project__sections">
            <article class="project__section">
                <div class="section__title">
                    <h3>{{ pick(info.problemDescription.title) }}</h3>
                    <hr />
                </div>
                <p v-html="pick(info.problemDescription.description)"></p>
            </article>

            <article class="project__section">
                <div class="section__title">
                    <h3>{{ pick(info.solutionDescription.title) }}</h3>
                    <hr />
                </div>
                <p v-html="pick(info.solutionDescription.description)"></p>
            </article>

            <article class="project__section">
                <div class="section__title">
                    <h3>{{ pick(info.exampleDescription.title) }}</h3>
                    <hr />
                </div>
                <p>{{ pick(info.exampleDescription.description) }}</p>
                <div class="project__image">
                    <img :src="info.exampleDescription.imageUrl" :alt="pick(info.exampleDescription.title)" />
                </div>
            </article>

            <article class="project__section"
                v-if="pick(info.finalDescription.title) || pick(info.finalDescription.description)">
                <div class="section__title">
                    <h3>{{ pick(info.finalDescription.title) }}</h3>
                    <hr />
                </div>
                <p v-html="pick(info.finalDescription.description)"></p>
            </article>
        </div>

        <div class="project__cta">
            <a class="primary-btn" :href="info.projectLink" target="_blank" rel="noreferrer">
                {{ t('projectsPage.openProject') }}
            </a>
        </div>
    </section>
</template>

<style scoped>
.project {
    padding: 4rem 1.5rem 5rem;
    max-width: 1120px;
    margin: 0 auto;
    color: #e4ecff;
}

.project__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.link-btn {
    background: none;
    border: 1px solid rgba(200, 213, 229, 0.6);
    color: #e4ecff;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
}

.link-btn:hover {
    background: #e4ecff;
    color: #020617;
    border-color: #e4ecff;
}

.eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.8rem;
    color: #93a4c5;
    margin: 0;
}

.date {
    margin: 0.15rem 0 0;
    color: #f9fbff;
    font-weight: 600;
}

.project__header h1 {
    margin: 1.5rem 0 0.5rem;
    font-size: 2.4rem;
    letter-spacing: -0.02em;
}

.project__lead {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #a8b5d4;
}

.project__banner {
    margin: 2rem 0;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

.project__banner img {
    width: 100%;
    height: auto;
    display: block;
}

.project__sections {
    display: grid;
    gap: 2rem;
}

.project__section {
    background: rgba(15, 23, 42, 0.82);
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.7);
}

.section__title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.section__title h3 {
    margin: 0;
}

.section__title hr {
    flex: 1;
    border: none;
    border-bottom: 1px solid rgba(148, 163, 184, 0.55);
}

.project__section p {
    margin: 0.75rem 0 0;
    color: #cbd5f5;
    line-height: 1.6;
}

.project__image {
    margin-top: 1.25rem;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.5);
}

.project__image img {
    width: 100%;
    display: block;
}

.project__cta {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
}

.primary-btn {
    background: linear-gradient(135deg, #0284c7, #22c55e);
    color: #0b1020;
    border: none;
    padding: 0.75rem 1.4rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0 16px 40px rgba(6, 182, 212, 0.45);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, filter 0.2s ease;
}

.primary-btn:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
    box-shadow: 0 22px 55px rgba(6, 182, 212, 0.55);
}

@media (max-width: 720px) {
    .project__header h1 {
        font-size: 2rem;
    }

    .project__section {
        padding: 1.25rem;
    }
}
</style>
