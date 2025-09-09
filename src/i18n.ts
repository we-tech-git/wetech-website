import { createI18n } from 'vue-i18n';
import messagesPTBR from './locales/pt-BR.json';
import messagesEN from './locales/en.json';

type MessageSchema = typeof messagesPTBR;

const i18n = createI18n<[MessageSchema], 'pt-BR' | 'en'>({
  legacy: false, 
  locale: 'pt-BR', 
  fallbackLocale: 'en', 
  messages: {
    'pt-BR': messagesPTBR,
    'en': messagesEN,
  },
});

export default i18n;