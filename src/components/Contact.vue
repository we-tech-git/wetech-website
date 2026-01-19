<template>
  <section id="contact" class="contact-section" v-if="!isProjectsPage">
    <div class="form-container">
      <div>
        <h2>{{ t('contact.title') }}</h2>
      </div>
      <p class="subtitle">{{ t('contact.subtitle') }}</p>

      <form class="input-wrapper" @submit.prevent="sendEmail">
        <span class="icon" v-html="svgSet.emailIcon"></span>
        <input id="contact-email" type="email" placeholder="e-mail" v-model="email" required />
        <button type="submit" class="send-btn">Send</button>
      </form>

      <p v-if="feedbackMessage" :class="['feedback-message', messageType]">
        {{ feedbackMessage }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import svgSet from '@/utils/svgSet';

const { t } = useI18n();
const route = useRoute();
const isProjectsPage = computed(() => route.path === '/projects');

const email = ref<string>("");
const feedbackMessage = ref<string>("");
const messageType = ref<"success" | "error">("success");

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function sendEmail() {
  feedbackMessage.value = "";
  if (!isValidEmail(email.value)) {
    messageType.value = "error";
    feedbackMessage.value = "Por favor, digite um e-mail válido.";
    return;
  }

  try {
    const response = await fetch('https://wetech-website-next.vercel.app/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: "",
        sobrenome: "",
        email: email.value,
        telefone: "000000",
        assunto: "",
        mensagem: ""
      })
    });

    if (response.ok) {
      messageType.value = "success";
      feedbackMessage.value = "E-mail enviado com sucesso!";
      email.value = "";
    } else {
      throw new Error('Erro ao enviar e-mail');
    }
  } catch (error: unknown) {
    messageType.value = "error";
    feedbackMessage.value = "Erro ao enviar e-mail. Tente novamente mais tarde.";
    console.error(error instanceof Error ? error.message : error);
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
  font-size: 2.0rem;
  flex: 1;
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