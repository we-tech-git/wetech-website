<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import GalleryImages from '@/components/projects/GalleryImages.vue'
import ProjectItem from '@/components/projects/ProjectItem.vue'
import { projects } from '@/components/projects/projectsData'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const slug = computed(() => (route.params.slug as string | undefined) ?? '')
const isPageLoaded = ref(false)

// Normalize known slug typos/variants so Tripper (2 p) resolves to Triper data
const normalizedSlug = computed(() => {
    if (slug.value === 'tripper') return 'triper'
    return slug.value
})

const currentProject = computed(() => projects.find((p) => p.slug === normalizedSlug.value))

const goBack = () => {
    router.push('/projects')
}

onMounted(() => {
    setTimeout(() => {
        isPageLoaded.value = true
    }, 100)
})
</script>


<template>
    <main class="projects-page" :class="{ 'projects-page--detail': !!slug, 'page--loaded': isPageLoaded }">
        <!-- Background Decorations -->
        <div class="page-bg">
            <div class="bg-gradient bg-gradient--1"></div>
            <div class="bg-gradient bg-gradient--2"></div>
            <div class="bg-stars"></div>
        </div>

        <GalleryImages v-if="!slug" :projects="projects" />

        <div v-else-if="currentProject">
            <ProjectItem :project="currentProject" :on-back="goBack" />
        </div>

        <section v-else class="not-found">
            <div class="not-found__icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            </div>
            <h1>{{ t('projectsPage.notFoundTitle') }}</h1>
            <p>{{ t('projectsPage.notFoundCopy') }}</p>
            <button class="link-btn" @click="goBack">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {{ t('projectsPage.back') }}
            </button>
        </section>
    </main>
</template>

<style scoped>
.projects-page {
    position: relative;
    background: linear-gradient(180deg, #020a1a 0%, #0a1628 40%, #061020 100%);
    min-height: 100vh;
    overflow-x: hidden;
}

/* ====== Background Effects ====== */
.page-bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.bg-gradient {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
}

.bg-gradient--1 {
    top: -20%;
    right: -10%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
}

.bg-gradient--2 {
    bottom: -30%;
    left: -15%;
    width: 900px;
    height: 900px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%);
}

.bg-stars {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.15), transparent),
        radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.1), transparent),
        radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.15), transparent),
        radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.1), transparent),
        radial-gradient(1px 1px at 160px 120px, rgba(255, 255, 255, 0.12), transparent);
    background-size: 200px 200px;
    animation: twinkle 8s ease-in-out infinite;
}

@keyframes twinkle {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }
}

/* ====== Not Found Section ====== */
.not-found {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 0 auto;
    padding: 8rem 1.5rem;
    text-align: center;
    color: #e4ecff;
}

.not-found__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(99, 102, 241, 0.1));
    border: 1px solid rgba(239, 68, 68, 0.2);
    border-radius: 50%;
    margin-bottom: 2rem;
    color: #f87171;
}

.not-found h1 {
    margin: 0 0 1rem;
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.not-found p {
    margin: 0 0 2rem;
    color: #64748b;
    font-size: 1.1rem;
    line-height: 1.6;
}

.link-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6));
    border: 1px solid rgba(148, 163, 184, 0.3);
    color: #e4ecff;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.link-btn:hover {
    background: rgba(6, 182, 212, 0.15);
    border-color: rgba(6, 182, 212, 0.5);
    color: #06b6d4;
    transform: translateX(-4px);
}

.link-btn svg {
    transition: transform 0.3s ease;
}

.link-btn:hover svg {
    transform: translateX(-3px);
}
</style>
