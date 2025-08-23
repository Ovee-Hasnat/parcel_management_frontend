/* eslint-disable @typescript-eslint/no-explicit-any */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import bn from "../locales/bn.json";

const savedLang = localStorage.getItem("language");

// Detect browser language
const browserLang = navigator.language.split("-")[0]; // "en-US" -> "en"

// Supported languages
const supportedLangs = ["en", "bn"] as const;

// Pick initial language
const initialLang =
  savedLang ||
  (supportedLangs.includes(browserLang as any) ? browserLang : "en");

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    bn: { translation: bn },
  },
  lng: initialLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Always persist when language changes
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
