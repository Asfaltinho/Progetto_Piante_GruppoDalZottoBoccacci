export default function SearchBar({ onSearch }) {
  return (
    <div className="search-row">
      <input id="SearchBar" type="text" placeholder="Cerca pianta..." />

      <select id="FamilyDropdwon" defaultValue="">
        <option disabled hidden value="">
          Filtra per Famiglia
        </option>
        <option value="">Nessun Filtro</option>
        <option value="Rosaceae">Rosaceae</option>
        <option value="Orchidaceae">Orchidaceae</option>
        <option value="Asteraceae">Asteraceae</option>
        <option value="Fabaceae">Fabaceae</option>
        <option value="Poaceae">Poaceae</option>
      </select>

      <button id="SearchBtn" onClick={onSearch}>
        🔍 →
      </button>
    </div>
  );
}
