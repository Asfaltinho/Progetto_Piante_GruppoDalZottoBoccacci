import "../styles/home.css";
import bg from "../assets/bg.jpeg";
import { useState } from "react";

import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import SearchBar from "../components/SearchBar.jsx";
import PlantCard from "../components/PlantCard.jsx";
import InfoBox from "../components/InfoBox.jsx";
import SideLogo from "../components/SideLogo.jsx";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [familyFilter, setFamilyFilter] = useState("");

  async function fetchPlants() {
    const query = document.getElementById("SearchBar").value;

    const response = await fetch(
      `http://localhost:3000/plants?q=${query}`
    );
    const data = await response.json();

    setPlants(data.data || []);
    setSelectedPlant(null);
  }

  // 🔥 FILTRO LOCALE
  const filteredPlants = familyFilter
    ? plants.filter(
        (plant) => plant.family === familyFilter
      )
    : plants;

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="content">
          <h1>SCEGLI LA PIANTA DI CUI SAPERE LE INFORMAZIONI</h1>

          <SearchBar
            onSearch={fetchPlants}
            onFamilyChange={setFamilyFilter}
          />

          <div className="main-box">
            <div className="results">
              {filteredPlants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onSelect={setSelectedPlant}
                />
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
