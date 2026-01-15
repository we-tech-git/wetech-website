<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import GalleryImages from '@/components/projects/GalleryImages.vue'
import ProjectItem from '@/components/projects/ProjectItem.vue'
import { projects } from '@/components/projects/projectsData'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => (route.params.slug as string | undefined) ?? '')
const currentProject = computed(() => projects.find((p) => p.slug === slug.value))

const goBack = () => {
    router.push('/projects')
}
</script>


<template>
    <main class="projects-page" :class="{ 'projects-page--detail': !!slug }">
        <GalleryImages v-if="!slug" :projects="projects" />

        <div v-else-if="currentProject">
            <ProjectItem :project="currentProject" :on-back="goBack" />
        </div>

        <section v-else class="not-found">
            <h1>{{ t('projectsPage.notFoundTitle') }}</h1>
            <p>{{ t('projectsPage.notFoundCopy') }}</p>
            <button class="link-btn" @click="goBack">{{ t('projectsPage.back') }}</button>
        </section>
    </main>
</template>

<style scoped>
.projects-page {
    background: #f3f7fb;
    min-height: 100vh;
}

.projects-page--detail {
    background: #050b1b;
}

.not-found {
    max-width: 720px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    text-align: center;
}

.not-found h1 {
    margin: 0 0 0.75rem;
}

.not-found p {
    margin: 0 0 1.5rem;
    color: #4a5c72;
}

.link-btn {
    background: none;
    border: 1px solid #0c1b2a;
    color: #0c1b2a;
    padding: 0.6rem 1.1rem;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
}

.link-btn:hover {
    background: #0c1b2a;
    color: #f5f7fb;
}
</style>
