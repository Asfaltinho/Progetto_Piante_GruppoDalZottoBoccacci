import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("");

  return (
    <div className="search-row">
      <input
        type="text"
        placeholder="Cerca pianta..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        value={family}
        onChange={(e) => setFamily(e.target.value)}
      >
        <option value="">Nessun filtro</option>
        <option value="Rosaceae">Rosaceae</option>
        <option value="Orchidaceae">Orchidaceae</option>
        <option value="Asteraceae">Asteraceae</option>
        <option value="Fabaceae">Fabaceae</option>
        <option value="Poaceae">Poaceae</option>
      </select>

      <button onClick={() => onSearch(query, family)}>🔍</button>
    </div>
  );
}
