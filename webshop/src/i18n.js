import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin": "To admin view",
      "cart": "Cart",
      "shops": "Our shops",
      "contact": "Contact us",
      "add-product": "Add product",
      "maintain-products": "Maintain products",
      "maintain-categories": "Maintain categories",
      "maintain-shops": "Maintain shops",
      "INVALID_EMAIL": "Invalid email",
      "INVALID_PASSWORD": "Invalid password",
      "WEAK_PASSWORD : Password should be at least 6 characters": "Password should be at least 6 characters"
    }
  },
  ee: {
    translation: {
      "admin": "Administraatori vaatesse",
      "cart": "Ostukorvi",
      "shops": "Meie poed",
      "contact": "Kontakteeru meiega",
      "add-product": "Lisa toode",
      "maintain-products": "Halda tooteid",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "INVALID_EMAIL": "Vale email",
      "INVALID_PASSWORD": "Vale parool",
      "WEAK_PASSWORD : Password should be at least 6 characters": "Parool on nõrk"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;