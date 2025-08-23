import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang); // persist selection
  };

  return (
    <Button
      onClick={toggleLanguage}
      size="sm"
      variant="ghost"
      className="cursor-pointer"
    >
      {i18n.language === "en" ? "Bn" : "En"}
    </Button>
  );
};

export default LanguageSwitcher;
