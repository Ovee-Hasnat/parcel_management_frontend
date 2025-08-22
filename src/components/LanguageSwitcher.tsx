import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="text-sm text-blue-500">
      {i18n.language === "en" ? "বাংলা" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
