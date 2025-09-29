<script setup lang="ts">

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import svgSet from '../utils/svgSet'

</script>

<template>
  <footer class="footer">
    <div class="footer-container">


      <div class="footer-column">
        <h3>{{ t('footer.projectsTitle') }}</h3>
        <ul>
          <li><a href="#">{{ t('footer.projects.triper') }}</a></li>
          <li><a href="#">{{ t('footer.projects.theChat') }}</a></li>
          <li><a href="#">{{ t('footer.projects.blueToken') }}</a></li>

        </ul>
      </div>


      <div class="footer-column">
        <h3>{{ t('footer.uxuiTitle') }}</h3>
        <ul>

          <li><a href="#">{{ t('footer.projects.matchCoder') }}</a></li>
          <li><a href="#">{{ t('footer.projects.petCare') }}</a></li>

        </ul>
      </div>


      <div class="footer-column contato">
        <h3>{{ t('footer.socialTitle') }}</h3>

        <div class="social-icons">
          <a href="https://linkedin.com" target="_blank">
            <span class="footer-icon" v-html="svgSet.linkedinIcon"></span>
          </a>

          <a href="https://github.com/we-tech-git" target="_blank">
            <span class="footer-icon" v-html="svgSet.githubIcon"></span>
          </a>

          <a href="mailto:seuemail@gmail.com" target="_blank">
            <span class="footer-icon" v-html="svgSet.gmailIcon"></span>
          </a>
        </div>
      </div>



    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #005b96;
  color: #ffffff;
  padding: 7rem 2rem;
  box-sizing: border-box;
}

.site-footer {
  margin-top: auto;
}

.footer-container {
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
}

.footer-column {
  flex: 1;
  min-width: 250px;
}

.footer-column h3 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0px;
}

.footer-column ul li {
  margin-bottom: 0.8rem;
}

.footer-column ul li a {
  color: hsla(0, 0%, 73%, 1);
  text-decoration: none;
  transition: 0.3s;
  font-size: 1.9rem;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.social-icons {
  margin-top: 10px;
  gap: 1.20rem;
  display: flex;
  align-items: center;
}

.social-icons a {
  color: #ffffff;
  display: inline-block;
}

.footer-icon :deep(svg) {
  width: 80px;
  height: 80px;
  fill: currentColor;
  border-radius: 3px;
  display: block;
}

.footer-icon :deep(path) {
  fill: currentColor;
}

.social-icons a[href*="linkedin.com"] .footer-icon :deep(path:first-of-type) {
  fill: currentColor;
}

.social-icons a[href*="linkedin.com"] .footer-icon :deep(path:last-of-type) {
  fill: #005B96;
}

.social-icons img:hover {
  transform: scale(1.1);
}

.footer-column.contato {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-column.contato {
    align-items: center;

    .social-icons {
      justify-content: center;
      margin-left: 0;
    }
  }
}
</style>