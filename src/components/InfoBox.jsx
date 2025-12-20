import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translate } from "../utils/translate";
import { uiText } from "../i18n/ui";

export default function InfoBox({ plant }) {
  const { language } = useLanguage();
  const t = uiText[language];
  const [name, setName] = useState("");

  useEffect(() => {
    if (!plant) return;
    translate(plant.common_name, language).then(setName);
  }, [plant, language]);

  if (!plant) return null;

  return (
    <div className="info-box">
      <h3>{name || plant.common_name}</h3>
      <ul>
        <li><strong>{t.family}:</strong> {plant.family}</li>
        <li><strong>{t.familyCommon}:</strong> {plant.family_common_name}</li>
        <li><strong>{t.genus}:</strong> {plant.genus}</li>
        <li><strong>{t.year}:</strong> {plant.year}</li>
      </ul>
    </div>
  );
}
