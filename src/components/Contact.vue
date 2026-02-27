<template>
  <section id="contact" class="contact-section" v-if="!isProjectsPage">
    <div class="form-container">
      <div>
        <h2>{{ t('contact.title') }}</h2>
      </div>
      <p class="subtitle">{{ t('contact.subtitle') }}</p>

      <form class="input-wrapper" @submit.prevent="openModal">
        <span class="icon" v-html="svgSet.emailIcon"></span>
        <input id="contact-email" type="email" :placeholder="t('contact.email')" v-model="email" required />
        <button type="submit" class="send-btn">{{ t('contact.send') }}</button>
      </form>

      <p v-if="feedbackMessage" :class="['feedback-message', messageType]">
        {{ feedbackMessage }}
      </p>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-card">
        <button class="close-btn" @click="closeModal">&times;</button>
        <h3>{{ t('contact.modalTitle') }}</h3>
        <form @submit.prevent="sendEmail">
          <div class="form-group">
            <input type="text" v-model="form.nome" :placeholder="t('contact.name')" required />
            <input type="text" v-model="form.sobrenome" :placeholder="t('contact.surname')" required />
          </div>
          <div class="form-group">
            <input type="email" v-model="form.email" :placeholder="t('contact.email')" required />
          </div>
          <div class="form-group">
            <input type="tel" v-model="form.telefone" :placeholder="t('contact.phone')" />
          </div>
          <div class="form-group">
            <input type="text" v-model="form.assunto" :placeholder="t('contact.subject')" required />
          </div>
          <div class="form-group">
            <textarea v-model="form.mensagem" :placeholder="t('contact.message')" rows="4" required></textarea>
          </div>
          <button type="submit" class="send-btn full-width">{{ t('contact.submit') }}</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import svgSet from '@/utils/svgSet';

const { t } = useI18n();
const route = useRoute();
const isProjectsPage = computed(() => route.path === '/projects');

const email = ref<string>("");
const feedbackMessage = ref<string>("");
const messageType = ref<"success" | "error">("success");
const isModalOpen = ref(false);

const form = reactive({
  nome: "",
  sobrenome: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: ""
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function openModal() {
  if (!isValidEmail(email.value)) {
    messageType.value = "error";
    feedbackMessage.value = t('contact.invalidEmail');
    return;
  }
  form.email = email.value; // Pre-fill email
  isModalOpen.value = true;
  feedbackMessage.value = "";
}

function closeModal() {
  isModalOpen.value = false;
}

async function sendEmail() {
  feedbackMessage.value = "";

  // Validate inside modal (optional extra validation)
  if (!isValidEmail(form.email)) {
    alert(t('contact.invalidEmail'));
    return;
  }

  try {
    const response = await fetch('https://wetech-website-next.vercel.app/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      messageType.value = "success";
      feedbackMessage.value = t('contact.successMessage');
      email.value = "";
      // Reset form
      Object.keys(form).forEach(key => (form as any)[key] = "");
      closeModal();
    } else {
      throw new Error('Erro ao enviar e-mail');
    }
  } catch (error: unknown) {
    messageType.value = "error";
    feedbackMessage.value = t('contact.errorMessage');
    console.error(error instanceof Error ? error.message : error);
    closeModal();
  }

  setTimeout(() => {
    feedbackMessage.value = "";
  }, 5000);
}
</script>

<style scoped>
.contact-section {
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 80px 20px;
  /* Reduced padding */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;

}

.form-container {
  width: 100%;
  max-width: 600px;
  /* Reduced from 100rem to standard form width */
  text-align: center;
}

h2 {
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.5rem;
  /* Reduced from 3rem */
  color: #007bff;
  margin-bottom: 2.5rem;
  font-weight: 600;
}

.input-wrapper {
  display: flex;
  align-items: center;
  border: 2px solid #007bff;
  border-radius: 30px;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  background: transparent;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.input-wrapper .icon {
  font-size: 1.5rem;
  color: #007bff;
  width: 30px;
  height: 30px;
}

input {
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  flex: 1;
}

/* Fix autofill background color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px hsla(233, 100%, 5%, 1) inset !important;
  -webkit-text-fill-color: white !important;
  transition: background-color 5000s ease-in-out 0s;
}

input::placeholder {
  color: #aaa;
  font-style: italic;
}

.send-btn {
  background: #007bff;
  border: none;
  border-radius: 30px;
  padding: 0.8rem 2rem;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.send-btn:hover {
  background: #0056b3;
  transform: scale(1.05);
}

.feedback-message {
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 1rem;
}

.feedback-message.success {
  color: #28a745;
}

.feedback-message.error {
  color: #dc3545;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.modal-card {
  background: hsla(233, 100%, 10%, 1);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid #007bff;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-card h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #aaa;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
}

.close-btn:hover {
  color: white;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 123, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #007bff;
  background: rgba(255, 255, 255, 0.1);
}

.form-group textarea {
  resize: vertical;
}

.full-width {
  width: 100%;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .contact-section {
    /* ALTERADO: Reduz o padding para diminuir o espaço entre as seções */
    padding: 0 1rem 3rem 1rem;
    /* ADICIONADO: Reduz a margem inferior no mobile */
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .input-wrapper .icon {
    display: none;
  }

  .input-wrapper {
    flex-direction: column;
    border: none;
    padding: 0;
    gap: 1rem;
  }

  input {
    width: 100%;
    border: 2px solid #007bff;
    border-radius: 30px;
    padding: 0.8rem 1.5rem;
    text-align: center;
  }

  input,
  .send-btn {
    width: 100%;
    margin-bottom: 1rem;
  }

  .send-btn {
    width: 100%;
    padding: 1rem;
  }
}
</style>