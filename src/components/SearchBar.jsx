import { uiText } from "../i18n/ui";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function SearchBar({ onSearch, onFamilyChange }) {
    const { language } = useLanguage();
    const t = uiText[language];
    return (
    <div className="search-row">
      <input
        id="SearchBar"
        type="text"
        placeholder="Cerca pianta..."
      />

      <select
        id="FamilyDropdwon"
        defaultValue=""
        onChange={(e) => onFamilyChange(e.target.value)}
      >
        <option value="">
          {t.allFamilies}
        </option>
        <option value="Rosaceae">Rosaceae</option>
        <option value="Orchidaceae">Orchidaceae</option>
        <option value="Asteraceae">Asteraceae</option>
        <option value="Fabaceae">Fabaceae</option>
        <option value="Poaceae">Poaceae</option>
      </select>

      <button onClick={() => {
        const q = document.getElementById("SearchBar").value;
        onSearch(q);
      }}>
        🔍 →
      </button>
    </div>
  );
}
