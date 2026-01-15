<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
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
const showCta = computed(() => !['toro-token', 'genesis-bank'].includes(props.project.slug))

// Animation states
const isLoaded = ref(false)
const sectionsVisible = ref<boolean[]>([false, false, false])

onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true
    }, 100)

    // Staggered animation for sections
    sectionsVisible.value.forEach((_, index) => {
        setTimeout(() => {
            sectionsVisible.value[index] = true
        }, 400 + (index * 200))
    })
})
</script>

<template>
    <section class="project" :class="{ 'project--loaded': isLoaded }">
        <!-- Decorative Elements -->
        <div class="project__bg-glow project__bg-glow--1"></div>
        <div class="project__bg-glow project__bg-glow--2"></div>
        <div class="project__grid-pattern"></div>

        <div class="project__top">
            <button class="link-btn" @click="onBack">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {{ t('projectsPage.back') }}
            </button>
            <div class="project__meta">
                <div class="meta-badge">
                    <span class="pulse-dot"></span>
                    <p class="eyebrow">{{ t('projectsPage.publishedOn') }}</p>
                </div>
                <p class="date">{{ pick(info.projectDate) }}</p>
            </div>
        </div>

        <header class="project__header">
            <div class="project__title-wrapper">
                <h1>{{ pick(info.title) }}</h1>
            </div>
            <p class="project__lead">{{ pick(info.firstDescription) }}</p>
        </header>

        <div class="project__banner" v-if="info.urlBanner">
            <div class="banner__frame">
                <div class="banner__shine"></div>
                <img :src="info.urlBanner" :alt="pick(info.title)" />
            </div>
        </div>

        <div class="project__sections">
            <article class="project__section" :class="{ 'section--visible': sectionsVisible[0] }">
                <div class="section__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                    </svg>
                </div>
                <div class="section__content">
                    <div class="section__title">
                        <span class="section__number">01</span>
                        <h3>{{ pick(info.problemDescription.title) }}</h3>
                    </div>
                    <div class="section__divider"></div>
                    <p v-html="pick(info.problemDescription.description)"></p>
                </div>
            </article>

            <article class="project__section" :class="{ 'section--visible': sectionsVisible[1] }">
                <div class="section__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path
                            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                </div>
                <div class="section__content">
                    <div class="section__title">
                        <span class="section__number">02</span>
                        <h3>{{ pick(info.solutionDescription.title) }}</h3>
                    </div>
                    <div class="section__divider"></div>
                    <p v-html="pick(info.solutionDescription.description)"></p>
                </div>
            </article>

            <article class="project__section project__section--featured"
                :class="{ 'section--visible': sectionsVisible[2] }">
                <div class="section__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                    </svg>
                </div>
                <div class="section__content">
                    <div class="section__title">
                        <span class="section__number">03</span>
                        <h3>{{ pick(info.exampleDescription.title) }}</h3>
                    </div>
                    <div class="section__divider"></div>
                    <p>{{ pick(info.exampleDescription.description) }}</p>
                </div>
                <div class="project__image">
                    <div class="image__browser-frame">
                        <div class="browser__dots">
                            <span></span><span></span><span></span>
                        </div>
                        <div class="browser__url">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span>{{ info.projectLink }}</span>
                        </div>
                    </div>
                    <img :src="info.exampleDescription.imageUrl" :alt="pick(info.exampleDescription.title)" />
                </div>
            </article>
        </div>

        <div v-if="showCta" class="project__cta">
            <div class="cta__wrapper">
                <p class="cta__label">Quer ver o projeto ao vivo?</p>
                <a class="primary-btn" :href="info.projectLink" target="_blank" rel="noreferrer">
                    <span>{{ t('projectsPage.openProject') }}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* ====== Base & Layout ====== */
.project {
    position: relative;
    padding: 7rem 1.5rem 5rem;
    max-width: 1200px;
    margin: 0 auto;
    color: #e4ecff;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.project--loaded {
    opacity: 1;
    transform: translateY(0);
}

/* ====== Background Decorations ====== */
.project__bg-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: -1;
}

.project__bg-glow--1 {
    top: 5%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
    animation: float 8s ease-in-out infinite;
}

.project__bg-glow--2 {
    bottom: 20%;
    right: -15%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
    animation: float 10s ease-in-out infinite reverse;
}

.project__grid-pattern {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: -1;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
}

@keyframes float {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    50% {
        transform: translate(30px, -20px) scale(1.05);
    }
}

/* ====== Top Bar ====== */
.project__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;
}

.link-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(148, 163, 184, 0.3);
    color: #e4ecff;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
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

.project__meta {
    text-align: right;
}

.meta-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(1.2);
    }
}

.eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
    font-weight: 600;
}

.date {
    margin: 0.25rem 0 0;
    color: #f1f5f9;
    font-weight: 700;
    font-size: 0.95rem;
}

/* ====== Header ====== */
.project__header {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 3rem;
}

.project__title-wrapper {
    margin-bottom: 1.5rem;
}

.project__label {
    display: inline-block;
    padding: 0.4rem 1rem;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2));
    border: 1px solid rgba(6, 182, 212, 0.3);
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #06b6d4;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
}

.project__header h1 {
    margin: 0;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
}

.project__lead {
    margin: 1.5rem auto 0;
    font-size: 1.15rem;
    line-height: 1.7;
    color: #94a3b8;
    max-width: 700px;
}

.project__tech-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 2rem;
}

.tech-pill {
    padding: 0.4rem 0.9rem;
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #cbd5e1;
    transition: all 0.3s ease;
}

.tech-pill:hover {
    background: rgba(6, 182, 212, 0.15);
    border-color: rgba(6, 182, 212, 0.4);
    color: #06b6d4;
    transform: translateY(-2px);
}

/* ====== Banner ====== */
.project__banner {
    margin: 0 auto 4rem;
    max-width: 1000px;
}

.banner__frame {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow:
        0 25px 80px -20px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(148, 163, 184, 0.1),
        inset 0 0 0 1px rgba(255, 255, 255, 0.05);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.banner__frame:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow:
        0 35px 100px -25px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(6, 182, 212, 0.2),
        inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.banner__shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(115deg,
            transparent 40%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 60%);
    transform: translateX(-100%);
    transition: transform 0.8s ease;
    z-index: 1;
}

.banner__frame:hover .banner__shine {
    transform: translateX(100%);
}

.project__banner img {
    width: 100%;
    height: auto;
    display: block;
}

/* ====== Sections ====== */
.project__sections {
    display: grid;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.project__section {
    position: relative;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 20px;
    padding: 2rem;
    box-shadow:
        0 20px 50px -15px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.section--visible {
    opacity: 1;
    transform: translateY(0);
}

.project__section:hover {
    border-color: rgba(6, 182, 212, 0.3);
    box-shadow:
        0 25px 60px -15px rgba(0, 0, 0, 0.5),
        0 0 30px rgba(6, 182, 212, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.project__section--featured {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(6, 182, 212, 0.08) 100%);
}

.section__icon {
    position: absolute;
    top: -18px;
    left: 2rem;
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #0284c7, #06b6d4);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
}

.section__content {
    padding-top: 0.5rem;
}

.section__title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
}

.section__number {
    font-size: 0.85rem;
    font-weight: 800;
    color: #06b6d4;
    font-family: monospace;
    opacity: 0.7;
}

.section__title h3 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 700;
    color: #f1f5f9;
}

.section__divider {
    height: 2px;
    background: linear-gradient(90deg, rgba(6, 182, 212, 0.5), transparent);
    border-radius: 1px;
    margin-bottom: 1rem;
}

.project__section p {
    margin: 0;
    color: #94a3b8;
    line-height: 1.75;
    font-size: 1rem;
}

/* ====== Project Image with Browser Frame ====== */
.project__image {
    margin-top: 1.5rem;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.2);
    background: #0f172a;
}

.image__browser-frame {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: rgba(30, 41, 59, 0.9);
    border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.browser__dots {
    display: flex;
    gap: 6px;
}

.browser__dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.browser__dots span:nth-child(1) {
    background: #ef4444;
}

.browser__dots span:nth-child(2) {
    background: #eab308;
}

.browser__dots span:nth-child(3) {
    background: #22c55e;
}

.browser__url {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.75rem;
    background: rgba(15, 23, 42, 0.8);
    border-radius: 6px;
    font-size: 0.75rem;
    color: #64748b;
    overflow: hidden;
}

.browser__url svg {
    flex-shrink: 0;
    color: #22c55e;
}

.browser__url span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.project__image img {
    width: 100%;
    display: block;
    transition: transform 0.5s ease;
}

.project__image:hover img {
    transform: scale(1.02);
}

/* ====== CTA Section ====== */
.project__cta {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
}

.cta__wrapper {
    text-align: center;
}

.cta__label {
    margin: 0 0 1rem;
    color: #64748b;
    font-size: 0.95rem;
}

.primary-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, #0284c7, #06b6d4);
    color: #ffffff;
    border: none;
    padding: 1rem 2rem;
    border-radius: 14px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    box-shadow:
        0 20px 50px rgba(6, 182, 212, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.primary-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #06b6d4, #22c55e);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.primary-btn span {
    position: relative;
    z-index: 1;
}

.primary-btn svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
}

.primary-btn:hover {
    transform: translateY(-4px);
    box-shadow:
        0 30px 60px rgba(6, 182, 212, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.primary-btn:hover::before {
    opacity: 1;
}

.primary-btn:hover svg {
    transform: translate(3px, -3px);
}

/* ====== Responsive ====== */
@media (max-width: 768px) {
    .project {
        padding: 6rem 1rem 4rem;
    }

    .project__top {
        flex-direction: column-reverse;
        align-items: stretch;
        gap: 1.5rem;
    }

    .project__meta {
        text-align: center;
    }

    .meta-badge {
        justify-content: center;
    }

    .link-btn {
        justify-content: center;
    }

    .project__section {
        padding: 1.75rem 1.25rem;
    }

    .section__icon {
        left: 1.25rem;
        width: 38px;
        height: 38px;
        top: -15px;
    }

    .project__tech-stack {
        gap: 0.5rem;
    }

    .tech-pill {
        font-size: 0.75rem;
        padding: 0.35rem 0.7rem;
    }

    .image__browser-frame {
        padding: 0.5rem 0.75rem;
    }

    .browser__url {
        font-size: 0.65rem;
    }
}
</style>
