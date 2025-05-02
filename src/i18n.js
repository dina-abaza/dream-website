import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

// تهيئة i18next
i18n
  .use(initReactI18next) // دمج i18next مع React
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
    },
    lng: 'ar', // اللغة الافتراضية هي العربية
    fallbackLng: 'ar', // لغة احتياطية إذا لم توجد الترجمة
    interpolation: {
      escapeValue: false, // React يعالج النصوص بأمان
    },
  });

export default i18n; // تصدير التهيئة
