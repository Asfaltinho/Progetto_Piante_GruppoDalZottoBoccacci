export default function SearchBar({ onSearch, onFamilyChange }) {
  return (
    <div className="search-row">
      <input id="SearchBar" type="text" placeholder="Cerca pianta..." />

      <select
        id="FamilyDropdwon"
        onChange={(e) => onFamilyChange(e.target.value)}
        defaultValue=""
      >
        <option value="">Tutte le famiglie</option>
        <option value="Rosaceae">Rosaceae</option>
        <option value="Orchidaceae">Orchidaceae</option>
        <option value="Asteraceae">Asteraceae</option>
        <option value="Fabaceae">Fabaceae</option>
        <option value="Poaceae">Poaceae</option>
      </select>

      <button onClick={onSearch}>🔍 →</button>
    </div>
  );
}
