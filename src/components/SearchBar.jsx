import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="search-row">
      <input
        type="text"
        placeholder="Cerca pianta..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => onSearch(query)}>🔍 →</button>
    </div>
  );
}
