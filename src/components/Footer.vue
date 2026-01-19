<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import svgSet from '../utils/svgSet'

const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- Brand Column -->
      <div class="footer-column brand-column">
        <div class="brand-header">
          <h2 class="brand-logo">We Tech</h2>
        </div>
        <p class="brand-description">{{ t('footer.description') }}</p>
      </div>

      <!-- Links columns -->
      <div class="footer-column">
        <h3>{{ t('footer.projectsTitle') }}</h3>
        <ul>
          <li>
            <RouterLink to="/projects/triper" class="footer-link">
              {{ t('footer.projects.triper') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/projects/toro-token" class="footer-link">
              Toro Token
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/projects/blue-token" class="footer-link">
              {{ t('footer.projects.blueToken') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/projects/genesis-bank" class="footer-link">
              Genesis Bank
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Social & Contact -->
      <div class="footer-column contact-column">
        <h3>{{ t('footer.socialTitle') }}</h3>

        <div class="social-icons">

          <a href="https://github.com/we-tech-git" target="_blank" class="social-link" aria-label="GitHub">
            <span class="footer-icon" v-html="svgSet.githubIcon"></span>
          </a>
          <a href="mailto:contact@wetechhub.com.br" target="_blank" class="social-link" aria-label="Email">
            <span class="footer-icon" v-html="svgSet.gmailIcon"></span>
          </a>
        </div>
      </div>

    </div>

    <!-- Copyright Bar -->
    <div class="copyright-bar">
      <p>{{ t('footer.copyright') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #005b96;
  color: #ffffff;
  padding-top: 5rem;
  padding-bottom: 2rem;
  /* Rounded top corners for a modern feel */
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  position: relative;
  overflow: hidden;
}

/* Subtle decoration */
.footer::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  pointer-events: none;
}

.footer-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  /* Increased from 3rem */
  padding: 0 2rem;
  margin-bottom: 5rem;
  justify-content: space-between;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.brand-column {
  flex: 1.5;
  min-width: 280px;
}

.brand-logo {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  color: #ffffff;
}

.brand-description {
  font-size: 1.1rem;
  /* Increased from 1rem */
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  /* Slightly muted for hierarchy */
  max-width: 340px;
}

.footer-column h3 {
  font-size: 1.25rem;
  /* Increased from 1.125rem */
  margin-bottom: 2rem;
  /* Increased from 1.5rem */
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 1rem;
  /* Increased from 0.75rem */
}

.footer-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.1rem;
  /* Increased from 1rem */
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.footer-link:hover {
  color: #ffffff;
  transform: translateX(5px);
}

.contact-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-email {
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.1rem;
  /* Increased from 0.95rem */
  transition: color 0.3s;
}

.contact-email:hover {
  color: #ffffff;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
}

.social-link:hover {
  background-color: #ffffff;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.footer-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Control SVG fill from parent */
.footer-icon :deep(svg) {
  fill: #ffffff;
  width: 100%;
  height: 100%;
  transition: fill 0.3s;
}

.footer-icon :deep(path) {
  fill: inherit;
  /* Allow fill to be inherited */
}

.social-link:hover .footer-icon :deep(svg) {
  fill: #005b96;
  /* Change icon color on hover to match brand */
}

/* Specific handling for multi-path icons if needed */
.social-link:hover .footer-icon :deep(path) {
  fill: #005b96;
}


.copyright-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  margin-top: 2rem;
  position: relative;
  z-index: 10;
}

.copyright-bar p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer {
    border-radius: 20px 20px 0 0;
    padding-top: 3rem;
  }

  .footer-container {
    flex-direction: column;
    gap: 3rem;
  }

  .brand-description {
    max-width: 100%;
  }

  .footer-column {
    min-width: 100%;
  }
}
</style>