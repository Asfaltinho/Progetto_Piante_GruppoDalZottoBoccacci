export default function SearchBar() {
  return (
    <div className="search-row">
      <input id="SearchBar" type="text" placeholder="Cerca pianta..." />

      <select id="FamilyDropdwon" defaultValue="">
        <option disabled hidden value="">Filtra per Famiglia</option>
        <option value="">Nessun Filtro</option>
        <option value="Rose">Rosaceae</option>
        <option value="orchidee">Orchidaceae</option>
        <option value="Asteracee">Asteraceae</option>
        <option value="Fabacee">Fabaceae</option>
        <option value="Poacee">Poaceae</option>
      </select>
      <button id="SearchBtn">🔍</button>
    </div>
  );
}
