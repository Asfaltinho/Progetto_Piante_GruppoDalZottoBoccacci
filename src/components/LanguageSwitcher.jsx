import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { setLanguage } = useLanguage();

  function change(lang) {
    setLanguage(lang);
    setOpen(false);
  }

  return (
    <div className={`language-switcher ${open ? "open" : ""}`}>
      <div className="globe" onClick={() => setOpen(!open)}>🌐</div>

      <span className="lang top deu" onClick={() => change("de")}>DEU</span>
      <span className="lang top ita" onClick={() => change("it")}>ITA</span>
      <span className="lang left ing" onClick={() => change("en")}>ENG</span>
      <span className="lang left jap" onClick={() => change("ja")}>JAP</span>
    </div>
  );
}
