export default function SearchBar() {
  return (
    <div className="search-row">
      <input type="text" placeholder="Cerca pianta..." />
      <button>INVIO</button>

      <select>
        <option value="">filtra famiglia</option>
        <option>Rosaceae</option>
        <option>Orchidaceae</option>
        <option>Asteraceae</option>
        <option>Fabaceae</option>
        <option>Poaceae</option>
      </select>
    </div>
  );
}
