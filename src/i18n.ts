import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";

i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "es", 
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
