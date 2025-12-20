import "../styles/home.css";
import bg from "../assets/bg.jpeg";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { uiText } from "../i18n/ui";

import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import SearchBar from "../components/SearchBar.jsx";
import PlantCard from "../components/PlantCard.jsx";
import InfoBox from "../components/InfoBox.jsx";
import SideLogo from "../components/SideLogo.jsx";

export default function Home() {
  const { language } = useLanguage();
  const t = uiText[language];

  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  async function fetchPlants() {
    const query = document.getElementById("SearchBar").value;
    const family = document.getElementById("FamilyDropdwon").value;

    const res = await fetch(
      `http://localhost:3000/plants?q=${query}&family=${family}`
    );
    const data = await res.json();
    setPlants(data.data || []);
    setSelectedPlant(null);
  }

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="content">
          <h1>{t.title}</h1>

          <SearchBar onSearch={fetchPlants} placeholder={t.search} allFamilies={t.allFamilies} />

          <div className="main-box">
            <div className="results">
              {plants.map(p => (
                <PlantCard key={p.id} plant={p} onSelect={setSelectedPlant} />
              ))}
            </div>

            <InfoBox plant={selectedPlant} />
          </div>
        </div>

        <SideLogo />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
