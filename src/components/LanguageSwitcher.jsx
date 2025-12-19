import { useState } from "react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`language-switcher ${open ? "open" : ""}`}>
      <div className="globe" onClick={() => setOpen(!open)}>
        🌐
      </div>

      <span className="lang top deu">DEU</span>
      <span className="lang top ita">ITA</span>

      <span className="lang left ing">ING</span>
      <span className="lang left jap">JAP</span>
    </div>
  );
}
