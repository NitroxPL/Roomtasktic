import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { CONFIG } from './config';

import pl from './locales/pl.json';

export default i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: {
        translation: pl,
      },
    },
    lng: CONFIG.LOCALE,
    fallbackLng: CONFIG.LOCALE,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
  });
