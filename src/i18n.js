import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      contact: "Communicate with Customer Service Agents",
      appName: "chat bubble",
    },
  },
  ar: {
    translation: {
      contact: "تواصل مع خدمة العملاء",
      appName: "فقاعه",
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
