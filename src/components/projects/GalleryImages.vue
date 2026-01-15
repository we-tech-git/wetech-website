<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { ProjectEntry } from '@/components/projects/projectsData'

const props = defineProps<{ projects: ProjectEntry[] }>()

const router = useRouter()
const hovered = ref<number>(-1)
const { locale, t } = useI18n()
const isLoaded = ref(false)
const cardsVisible = ref<boolean[]>([])

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

onMounted(() => {
    cardsVisible.value = new Array(props.projects.length).fill(false)

    setTimeout(() => {
        isLoaded.value = true
    }, 100)

    // Staggered card animations
    props.projects.forEach((_, index) => {
        setTimeout(() => {
            cardsVisible.value[index] = true
        }, 300 + (index * 150))
    })
})
</script>

<template>
    <section class="gallery" :class="{ 'gallery--loaded': isLoaded }">
        <!-- Background Effects -->
        <div class="gallery__orb gallery__orb--1"></div>
        <div class="gallery__orb gallery__orb--2"></div>
        <div class="gallery__orb gallery__orb--3"></div>
        <div class="gallery__noise"></div>
        <div class="gallery__grid-lines"></div>

        <div class="gallery__head">
            <div class="gallery__badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>We Tech Portfolio</span>
            </div>
            <h1>{{ t('projectsPage.galleryTitle') }}</h1>
            <p class="lead">{{ t('projectsPage.gallerySubtitle') }}</p>

            <!-- Stats Row -->
            <div class="gallery__stats">
                <div class="stat">
                    <span class="stat__number">{{ cards.length }}+</span>
                    <span class="stat__label">Projetos</span>
                </div>
                <div class="stat__divider"></div>
                <div class="stat">
                    <span class="stat__number">100%</span>
                    <span class="stat__label">Satisfação</span>
                </div>
                <div class="stat__divider"></div>
                <div class="stat">
                    <span class="stat__number">5★</span>
                    <span class="stat__label">Avaliação</span>
                </div>
            </div>
        </div>

        <div class="gallery__grid">
            <article v-for="(card, index) in cards" :key="card.slug" class="gallery__card"
                :class="{ 'card--visible': cardsVisible[index] }" :style="{ backgroundImage: `url(${card.src})` }"
                @mouseenter="hovered = index" @mouseleave="hovered = -1" @click="router.push(`/projects/${card.slug}`)">
                <div class="gallery__glow"></div>
                <div class="gallery__overlay" :class="{ 'gallery__overlay--visible': hovered === index }"></div>

                <!-- Floating Elements -->
                <div class="gallery__floating-icons">
                    <span class="floating-icon">🚀</span>
                </div>

                <div class="gallery__content">
                    <div class="tag">
                        <span class="tag__dot"></span>
                        {{ pickLocale(card.title) }}
                    </div>
                    <p class="card-title">{{ pickLocale(card.text) }}</p>
                    <button class="ghost-btn">
                        <span>{{ t('projectsPage.viewDetails') }}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <!-- Card Border Glow -->
                <div class="gallery__border-glow"></div>
            </article>
        </div>

        <!-- Bottom Decoration -->
        <div class="gallery__cta">
            <p>Interessado em começar um projeto?</p>
            <a href="/contact" class="gallery__cta-btn">
                Entre em contato
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </section>
</template>

<style scoped>
/* ====== Base Layout ====== */
.gallery {
    position: relative;
    padding: 6rem 1.5rem 5rem;
    min-height: 100vh;
    background: linear-gradient(180deg, #020a1a 0%, #0a1628 50%, #061020 100%);
    color: #e7f1ff;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.6s ease;
}

.gallery--loaded {
    opacity: 1;
}

/* ====== Background Effects ====== */
.gallery__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    z-index: 0;
}

.gallery__orb--1 {
    top: -10%;
    left: -5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
    animation: orbFloat 12s ease-in-out infinite;
}

.gallery__orb--2 {
    top: 40%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
    animation: orbFloat 15s ease-in-out infinite reverse;
}

.gallery__orb--3 {
    bottom: -15%;
    left: 30%;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(6, 95, 70, 0.1) 0%, transparent 70%);
    animation: orbFloat 18s ease-in-out infinite;
}

@keyframes orbFloat {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    33% {
        transform: translate(40px, -30px) scale(1.05);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.95);
    }
}

.gallery__noise {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    z-index: 0;
}

.gallery__grid-lines {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
    z-index: 0;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%);
}

/* ====== Header ====== */
.gallery__head {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto 4rem;
    text-align: center;
}

.gallery__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.15));
    border: 1px solid rgba(6, 182, 212, 0.3);
    border-radius: 999px;
    margin-bottom: 1.5rem;
    color: #06b6d4;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.gallery__badge svg {
    color: #fbbf24;
}

.gallery h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    margin: 0 0 1rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
}

.lead {
    color: #94a3b8;
    font-size: 1.15rem;
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto;
}

/* ====== Stats Row ====== */
.gallery__stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2.5rem;
    padding: 1.25rem 2rem;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 16px;
    backdrop-filter: blur(10px);
}

.stat {
    text-align: center;
}

.stat__number {
    display: block;
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #06b6d4, #22c55e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat__label {
    font-size: 0.8rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
}

.stat__divider {
    width: 1px;
    height: 40px;
    background: linear-gradient(180deg, transparent, rgba(148, 163, 184, 0.3), transparent);
}

/* ====== Cards Grid ====== */
.gallery__grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.gallery__card {
    position: relative;
    min-height: 360px;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card--visible {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.gallery__card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), transparent 50%, rgba(99, 102, 241, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.gallery__card:hover::before {
    opacity: 1;
}

.gallery__card:hover {
    transform: translateY(-12px) scale(1.02);
}

.gallery__border-glow {
    position: absolute;
    inset: -2px;
    border-radius: 26px;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.4), transparent 40%, rgba(99, 102, 241, 0.4));
    opacity: 0;
    filter: blur(15px);
    transition: opacity 0.4s ease;
    z-index: -1;
}

.gallery__card:hover .gallery__border-glow {
    opacity: 0.6;
}

.gallery__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(3, 12, 28, 0.2) 0%, rgba(1, 7, 18, 0.92) 100%);
    opacity: 0.85;
    transition: opacity 0.4s ease, background 0.4s ease;
}

.gallery__overlay--visible {
    opacity: 1;
    background: linear-gradient(180deg, rgba(3, 12, 28, 0.1) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(1, 7, 18, 0.95) 100%);
}

.gallery__glow {
    position: absolute;
    inset: 15%;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.25), transparent 60%);
    filter: blur(25px);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.gallery__card:hover .gallery__glow {
    opacity: 0.7;
    transform: scale(1.2);
}

/* ====== Floating Elements ====== */
.gallery__floating-icons {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 2;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.4s ease;
}

.gallery__card:hover .gallery__floating-icons {
    opacity: 1;
    transform: translateY(0);
}

.floating-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(15, 23, 42, 0.8);
    border-radius: 12px;
    font-size: 1.2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(148, 163, 184, 0.2);
}

/* ====== Card Content ====== */
.gallery__content {
    position: relative;
    z-index: 2;
    padding: 2rem;
    width: 100%;
}

.tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    background: rgba(6, 182, 212, 0.15);
    border: 1px solid rgba(6, 182, 212, 0.3);
    color: #67e8f9;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.02em;
    margin-bottom: 0.75rem;
    backdrop-filter: blur(8px);
}

.tag__dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    animation: tagPulse 2s ease-in-out infinite;
}

@keyframes tagPulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }
}

.card-title {
    margin: 0 0 1.25rem;
    color: #e2e8f0;
    line-height: 1.6;
    font-weight: 500;
    font-size: 1rem;
}

.ghost-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(6, 182, 212, 0.5);
    background: rgba(6, 182, 212, 0.1);
    color: #67e8f9;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ghost-btn svg {
    transition: transform 0.3s ease;
}

.gallery__card:hover .ghost-btn {
    background: linear-gradient(135deg, #06b6d4, #0284c7);
    color: #ffffff;
    border-color: transparent;
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
    transform: translateY(-2px);
}

.gallery__card:hover .ghost-btn svg {
    transform: translateX(4px);
}

/* ====== CTA Section ====== */
.gallery__cta {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-top: 4rem;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6));
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 24px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    backdrop-filter: blur(10px);
}

.gallery__cta p {
    margin: 0 0 1.5rem;
    color: #94a3b8;
    font-size: 1.1rem;
}

.gallery__cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #06b6d4, #0284c7);
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 14px;
    box-shadow: 0 15px 40px rgba(6, 182, 212, 0.35);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery__cta-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(6, 182, 212, 0.5);
}

.gallery__cta-btn svg {
    transition: transform 0.3s ease;
}

.gallery__cta-btn:hover svg {
    transform: translateX(5px);
}

/* ====== Responsive ====== */
@media (max-width: 768px) {
    .gallery {
        padding: 5rem 1rem 4rem;
    }

    .gallery__stats {
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
    }

    .stat__divider {
        width: 60px;
        height: 1px;
    }

    .gallery__grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .gallery__card {
        min-height: 300px;
    }

    .gallery__content {
        padding: 1.5rem;
    }

    .gallery__cta {
        padding: 2rem 1.5rem;
        margin-top: 3rem;
    }
}
</style>
